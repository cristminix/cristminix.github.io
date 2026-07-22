# Memperbaiki Route Markdown (View as Markdown / `.html.md`) 404

## Masalah

Route untuk mengakses konten markdown mentah (`/path/index.html.md` dan "View as Markdown" via `Accept: text/markdown`) selalu mengembalikan **404** saat dijalankan dengan `next start` (production mode).

## Analisis

### Alur Request

```
URL: /resources/commerce-modules/api-key/concepts/index.html.md
1. basePath (/resources) di-strip → /commerce-modules/api-key/concepts/index.html.md
2. Rewrite beforeFiles match → /md-content/commerce-modules/api-key/concepts
3. Route handler md-content/[[...slug]]/route.ts:
   a. Cari file di files-map.mjs → ditemukan
   b. Panggil fetchMdxContent(baseUrl, filePathFromMap)
```

### Root Cause di `fetchMdxContent` (`apps/resources/utils/fetch-mdx-content.ts`)

Fungsi `fetchMdxContent` bekerja seperti ini:

```typescript
const relPath = filePathFromMap.replace(/^.*\/app\//, "")
return workerCompatibleFetch<string | null>({
  url: `${baseUrl}/raw-mdx/${relPath}`,    // http://10.10.0.3:3003/resources/raw-mdx/...
  responseTransformer: async (res) => {
    return res.ok ? res.text() : null       // kalau 404 → return null
  },
  fallbackAction: async () => {
    // Baca dari disk (tidak pernah dipanggil!)
  },
  useRemote: isCloudflare,                  // false di local
})
```

Masalahnya ada di `workerCompatibleFetch` (`docs-utils/src/worker-compatible-fetch.ts`):

```typescript
const shouldFetch = useRemote || /^https?:\/\//.test(url)
if (shouldFetch) {
  const res = await fetch(url)           // SELALU fetch karena URL mulai http://
  return await responseTransformer(res)  // return null karena 404
}
// fallbackAction() TIDAK PERNAH dipanggil
return fallbackAction()
```

Karena URL selalu diawali `http://`, `shouldFetch` selalu `true`. Fungsi `workerCompatibleFetch` **tidak pernah memanggil `fallbackAction`** ketika fetch menghasilkan 404. Akibatnya `null` dikembalikan ke route handler → `notFound()`.

Route `raw-mdx` tidak ada di aplikasi, jadi fetch selalu gagal.

### Masalah Tambahan: PostHog API Key

Di route handler `md-content`, ada kode yang membuat instance PostHog ketika `Accept: text/markdown`:

```typescript
const client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
})
```

Karena `NEXT_PUBLIC_POSTHOG_KEY` kosong, PostHog throw error yang menghentikan proses.

## Solusi

### 1. Fix `fetchMdxContent` — Fallback Manual ke Disk

**File:** `apps/resources/utils/fetch-mdx-content.ts`

```typescript
const content = await workerCompatibleFetch<string | null>({
  url: `${baseUrl}/raw-mdx/${relPath}`,
  responseTransformer: async (res) => {
    return res.ok ? res.text() : null
  },
  fallbackAction: async () => null,
  useRemote: isCloudflare,
})

if (content !== null) {
  return content
}

// fallback manual ke disk ketika remote fetch gagal
try {
  const { promises: fs } = await import("fs")
  return await fs.readFile(
    path.join(process.cwd(), "app", relPath),
    "utf-8"
  )
} catch {
  return null
}
```

### 2. Tambah Dummy PostHog Key

**File:** `apps/resources/.env`

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_dummykeyforlocaldev
NEXT_PUBLIC_POSTHOG_HOST=http://localhost:3003
```

### 3. Rebuild

```bash
yarn workspace resources build
```

### 4. Fix Juga di Book App

**File:** `apps/book/utils/fetch-raw-mdx.ts`

Book app punya masalah yang sama persis. Bedanya, ia menggunakan fungsi `fetchRawMdx` yang mengecek dua file: `_md-content.mdx` (override) dan `page.mdx`. Fix dilakukan dengan membungkus logika fetch ke helper `tryFetchWithFallback`:

```typescript
async function tryFetchWithFallback(filename: string): Promise<string | null> {
  const result = await workerCompatibleFetch<string | null>({
    url: `${origin}/raw-mdx/${[...slug, filename].join("/")}`,
    responseTransformer: async (res) => res.ok ? res.text() : null,
    fallbackAction: async () => null,
    useRemote: isCloudflare,
  })

  if (result !== null) return result

  try {
    const { promises: fs } = await import("fs")
    return await fs.readFile(
      path.join(process.cwd(), "app", ...slug, filename), "utf-8"
    )
  } catch {
    return null
  }
}
```

### 5. Fix Juga di UI App

**File:** `apps/ui/app/md-content/[[...slug]]/route.ts`

UI app punya pola yang sama dengan resources dan book. Route handler-nya langsung memanggil `workerCompatibleFetch` tanpa helper. Fix dengan menambahkan fallback manual setelah fetch gagal:

```typescript
let fileContent = await workerCompatibleFetch<string | null>({
  url: `${origin}${basePath}/raw-mdx/${[...slug, "page.mdx"].join("/")}`,
  responseTransformer: async (res) => res.ok ? res.text() : null,
  fallbackAction: async () => null,
  useRemote: isCloudflare,
})

if (fileContent === null) {
  try {
    const { promises: fs } = await import("fs")
    fileContent = await fs.readFile(
      path.join(process.cwd(), "app", ...slug, "page.mdx"), "utf-8"
    )
  } catch {
    // fallback failed
  }
}
```

Tidak lupa membuat file `.env` (copy dari `.env.example`) dengan PostHog key dummy dan `BASE_URL` yang sesuai.

### 6. Fix Juga di User Guide App

**File:** `apps/user-guide/app/md-content/[[...slug]]/route.ts`

Pola yang sama persis dengan UI app — `workerCompatibleFetch` langsung di route handler dengan fallback yang tidak pernah kepanggil. Fix identik dengan UI app.

### 7. Fix Juga di Bloom/Cloud App

**File:** `apps/bloom/app/md-content/[[...slug]]/route.ts`

Pola yang sama. Bloom adalah nama package untuk app cloud. Base path-nya `/cloud`. Fix identik.

## Hasil Test

Setelah fix, semua route markdown di kelima app berfungsi normal (HTTP 200):

| App | Port | Halaman Biasa | `.html.md` | `.md` |
|-----|------|:------------:|:----------:|:----:|
| **resources** | 3003 | ✅ | ✅ | ✅ |
| **book** | 3001 | ✅ | ✅ | ✅ |
| **ui** | 3002 | ✅ | ✅ | ✅ |
| **user-guide** | 3004 | ✅ | ✅ | ✅ |
| **bloom** | 3005 | `/cloud` | ✅ | ✅ | ✅ |
| **cloud** | 3006 | `/cloud` | ✅ | ✅ | ✅ |

Ada error PostHog yang tidak fatal (hanya telemetry logging):
```
Error [PostHogFetchHttpError]: HTTP error while fetching PostHog: status=404
```
Ini karena tidak ada PostHog server lokal — response tetap terkirim dengan benar.

## Catatan

- `workerCompatibleFetch` didesain untuk Cloudflare Workers (tidak bisa `fs.readFile`). Di lingkungan local/production biasa, ia harusnya pakai `fallbackAction` — tapi karena URL selalu `http://`, ia selalu fetch.
- Route `raw-mdx` sebenarnya tidak pernah dibuat untuk production mode. Di Cloudflare, file dibaca dari R2 bucket.
- Fix ini mempertahankan kompatibilitas dengan Cloudflare (`useRemote: isCloudflare`) sambil menambahkan fallback yang benar untuk mode `next start`.
