# Membangun dan Menjalankan Dokumentasi MedusaJS

Dokumen ini menjelaskan cara build dan menjalankan dokumentasi MedusaJS dari `www/` agar bisa diakses via LAN.

## Struktur Monorepo

```
www/
├── apps/
│   ├── book/              # Dokumentasi utama (port 3001)
│   ├── resources/         # Referensi resources (port 3003)
│   ├── user-guide/        # Panduan pengguna (port 3004)
│   ├── api-reference/     # API Reference (port 3000)
│   ├── ui/                # Component docs
│   ├── bloom/             # Blog
│   ├── cloud/             # Cloud docs
│   └── docs/              # Docs portal
├── packages/              # Paket pendukung (docs-ui, dll)
└── package.json           # Root workspace (Turbo)
```

## Build Dokumentasi

### Build Semua Apps

```bash
cd www
yarn build
```

### Build App Spesifik

| App | Perintah |
|-----|----------|
| Buku utama | `yarn build:docs` (`--filter=book`) |
| Resources | `yarn build:resources` (`--filter=resources`) |
| User Guide | `yarn build:user-guide` (`--filter=user-guide`) |

## Menjalankan via LAN

Setelah build, jalankan production server dengan bind ke semua network interface:

### Resources (port 3003)

```bash
cd www
yarn workspace resources start -p 3003 -H 0.0.0.0
```

Akses: `http://10.10.0.3:3003`

### Book (port 3001)

```bash
cd www
yarn workspace book start -p 3001 -H 0.0.0.0
```

Akses: `http://10.10.0.3:3001`

### User Guide (port 3004)

```bash
cd www
yarn workspace user-guide start -p 3004 -H 0.0.0.0
```

Akses: `http://10.10.0.3:3004`

### Mode Development

Gunakan `dev` sebagai ganti `start` untuk hot-reload:

```bash
yarn workspace resources dev -p 3003 -H 0.0.0.0
```

## Catatan Penting

- Flag `-H 0.0.0.0` membuat Next.js bind ke semua network interface, sehingga bisa diakses dari perangkat lain di LAN.
- Ganti `10.10.0.3` dengan IP LAN sesuai kebutuhan.
- Pastikan firewall mengizinkan koneksi ke port yang digunakan (3001, 3003, 3004, dll).
- Node.js minimal versi 20.
- Jalankan `yarn install` dulu jika belum pernah.
