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

## Catatan

- `workerCompatibleFetch` didesain untuk Cloudflare Workers (tidak bisa `fs.readFile`). Di lingkungan local/production biasa, ia harusnya pakai `fallbackAction` — tapi karena URL selalu `http://`, ia selalu fetch.
- Route `raw-mdx` sebenarnya tidak pernah dibuat untuk production mode. Di Cloudflare, file dibaca dari R2 bucket.
- Fix ini mempertahankan kompatibilitas dengan Cloudflare (`useRemote: isCloudflare`) sambil menambahkan fallback yang benar untuk mode `next start`.
