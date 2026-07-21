# Menjalankan API Reference MedusaJS

Dokumen ini menjelaskan cara menjalankan dokumentasi API Reference MedusaJS yang berada di `www/apps/api-reference/`.

## Struktur Folder

```
www/
├── apps/
│   └── api-reference/     # Aplikasi API Reference (Next.js)
│       ├── specs/         # OpenAPI specs (auto-generated)
│       │   ├── admin/     # Admin API
│       │   ├── store/     # Store API
│       │   └── versions/  # Versi API
│       ├── generated/     # Hasil generate (sidebar, sitemap)
│       ├── app/           # Kode Next.js App Router
│       │   ├── admin/     # Halaman admin
│       │   ├── store/     # Halaman store
│       │   └── base-specs/ # API route untuk load specs
│       ├── components/    # Komponen UI
│       └── lib/           # Utilitas
├── packages/              # Paket pendukung
└── package.json           # Root workspace (Turbo)
```

## Konfigurasi Environment (.env)

Buat file `.env` di `apps/api-reference/.env` (copy dari `.env.sample`):

```env
# ESSENTIAL FOR DEV
NEXT_PUBLIC_BASE_PATH=/api
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_BASE_URL=http://10.10.0.3:3000
```

**Penjelasan variabel:**

| Variabel | Wajib | Keterangan |
|----------|-------|------------|
| `NEXT_PUBLIC_BASE_PATH` | Ya | Base path aplikasi. Default `/api`. Semua route akan diprefix dengan ini. |
| `NEXT_PUBLIC_ENV` | Ya | `development` untuk dev, `production` untuk production. |
| `NEXT_PUBLIC_BASE_URL` | Ya | URL base aplikasi. Ganti dengan IP LAN sesuai kebutuhan. |

**Catatan penting:**

- `NEXT_PUBLIC_BASE_PATH=/api` — Semua route akan diprefix dengan `/api`. Jadi aksesnya bukan `/admin` melainkan **`/api/admin`**.
- `NEXT_PUBLIC_BASE_URL` digunakan oleh fungsi `getBaseSpecs` untuk fetch specs dari API route internal.
- Jika ingin menghilangkan prefix `/api`, set `NEXT_PUBLIC_BASE_PATH=` (kosongkan).

## Cara Menjalankan

### Dari Root `www/` (via Turbo)

```bash
# 1. Install dependensi (jika belum)
yarn install

# 2. Siapkan specs OpenAPI
yarn prep --filter=api-reference

# 3. Jalankan dev server
yarn dev --filter=api-reference
```

### Langsung dari `apps/api-reference/`

```bash
cd www/apps/api-reference

# 1. Siapkan spesifikasi (cukup sekali)
yarn prep

# 2. Jalankan dev server
yarn dev              # port default (3000)
# atau
yarn dev -p 3000      # tentukan port spesifik
```

### Agar Bisa Diakses dari Perangkat Lain (IP LAN)

```bash
next dev -H 0.0.0.0
# atau
yarn dev -H 0.0.0.0
```

Lalu akses dari browser perangkat lain: `http://<IP_LAN>:3000/api/admin`

## Akses Aplikasi

Karena `NEXT_PUBLIC_BASE_PATH=/api`, akses via:

| URL | Keterangan |
|-----|------------|
| `http://localhost:3000/api/admin` | Admin API Reference |
| `http://localhost:3000/api/store` | Store API Reference |
| `http://localhost:3000/base-specs?area=admin` | API route untuk load specs (internal) |

> ⚠️ **Jangan akses root `/`** — tidak ada halaman index. Selalu gunakan `/api/admin` atau `/api/store`.

## Scripts yang Tersedia

| Script | Perintah | Keterangan |
|--------|----------|------------|
| `dev` | `next dev` | Mode development |
| `dev -H 0.0.0.0` | `next dev -H 0.0.0.0` | Dev dengan binding ke semua network interface |
| `dev:monorepo` | `yarn dev -p 3000` | Dev untuk konteks monorepo |
| `build` | `next build` | Build production |
| `start` | `next start` | Jalankan production build |
| `prep` | `node ./scripts/prepare.mjs` | Siapkan specs |
| `lint` | `next lint --fix` | Linting |
| `test` | `vitest` | Menjalankan tes |

## Catatan

- OpenAPI specs di folder `specs/` digenerate otomatis oleh OAS CLI tool dari `packages/medusa/src/api`.
- Jangan mengedit file specs secara langsung; lakukan perubahan di source code API.
- Pastikan Node.js versi >= 20.
- Pastikan package dependencies seperti `docs-ui` dan `docs-utils` sudah ter-build dengan benar (Turbo handle ini otomatis).
