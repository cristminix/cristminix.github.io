---
title: Menjalankan API Reference
layout: default
---

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
│       ├── components/    # Komponen UI
│       └── lib/           # Utilitas
├── packages/              # Paket pendukung
└── package.json           # Root workspace (Turbo)
```

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

# 1. Siapkan specs OpenAPI (cukup sekali)
yarn prep

# 2. Jalankan dev server
yarn dev                    # port default (3000)
# atau
yarn dev -p 3000            # tentukan port spesifik
```

## Scripts yang Tersedia

| Script | Perintah | Keterangan |
|--------|----------|------------|
| `dev` | `next dev` | Mode development |
| `build` | `next build` | Build production |
| `start` | `next start` | Jalankan production build |
| `prep` | `node ./scripts/prepare.mjs` | Siapkan specs |
| `lint` | `next lint --fix` | Linting |
| `test` | `vitest` | Menjalankan tes |

## Catatan

- OpenAPI specs di folder `specs/` digenerate otomatis oleh OAS CLI tool dari `packages/medusa/src/api`.
- Jangan mengedit file specs secara langsung; lakukan perubahan di source code API.
- Pastikan Node.js versi >= 20.
