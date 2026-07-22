# Menjalankan Dokumentasi MedusaJS dengan Docker Compose

Dokumen ini menjelaskan cara membangun dan menjalankan seluruh dokumentasi MedusaJS (tujuh aplikasi Next.js di `www/apps/`) dalam satu container Docker, dengan Nginx sebagai reverse proxy sehingga semuanya dapat diakses lewat satu endpoint.

## Prasyarat

- Docker 20+
- Docker Compose v2
- RAM minimal 8 GB untuk proses build (tujuh build Next.js berjalan dalam satu layer)

## Berkas Terkait

Semua berkas berada di root repository:

```
medusa/
├── Dockerfile                    # Multi-stage build (deps → builder → runner)
├── docker-compose.yml            # Definisi service `docs`
├── docker-entrypoint.sh          # Menjalankan 7 app Next.js + nginx
├── nginx.conf                    # Reverse proxy per prefix URL
├── .dockerignore                 # Membatasi build context ke `www/`
└── medusa-docs-docker-util.sh    # Helper script untuk perintah compose
```

## Cara Cepat

```bash
# Build image (10-20 menit pada run pertama; semua app dikompilasi di sini)
./medusa-docs-docker-util.sh build

# Jalankan container di background
./medusa-docs-docker-util.sh start

# Cek status
./medusa-docs-docker-util.sh status
```

Buka `http://localhost:8082` di browser.

## Daftar Perintah

Helper script `medusa-docs-docker-util.sh` membungkus perintah `docker compose`:

| Perintah | Keterangan |
|----------|------------|
| `./medusa-docs-docker-util.sh build` | Build image dokumentasi |
| `./medusa-docs-docker-util.sh start` | Jalankan container di background |
| `./medusa-docs-docker-util.sh stop` | Hentikan container |
| `./medusa-docs-docker-util.sh restart` | Restart container |
| `./medusa-docs-docker-util.sh status` | Tampilkan status container |
| `./medusa-docs-docker-util.sh logs` | Tail log (semua app berbagi satu stream) |
| `./medusa-docs-docker-util.sh down` | Hentikan dan hapus container |
| `./medusa-docs-docker-util.sh down-clean` | Hentikan, hapus container beserta image |

Perintah `docker compose` langsung juga bisa dipakai:

```bash
docker compose build
docker compose up -d
docker compose logs -f
docker compose down
```

## Arsitektur

Satu image berisi ketujuh aplikasi Next.js beserta Nginx. Aplikasi dibangun pada saat image build, sehingga menjalankan container relatif cepat — `start` hanya melakukan `next start` untuk tujuh proses lalu menjalankan Nginx di port 80.

```
                        ┌─────────────────────────────┐
  host:8082  ──────▶    │  container:80  (nginx)      │
                        │    /          → :3001 book  │
                        │    /api       → :3000       │
                        │    /ui        → :3002       │
                        │    /resources → :3003       │
                        │    /user-guide→ :3004       │
                        │    /bloom     → :3005       │
                        │    /cloud     → :3006       │
                        └─────────────────────────────┘
```

### Tahapan Build (Dockerfile)

| Stage | Isi |
|-------|-----|
| `deps` | Menyalin seluruh manifest workspace lalu `yarn install --immutable`. Dipisah agar layer install bisa di-cache. |
| `builder` | Menyalin tree hasil install + sumber `www/`, lalu `yarn build:packages && yarn build`. |
| `runner` | `node:20-alpine` + Nginx, berisi hasil build dan entrypoint. |

Beberapa catatan implementasi:

- `YARN_NODE_LINKER=node-modules` — Yarn 3 default-nya PnP, tetapi build Next.js di sini membutuhkan `node_modules`.
- `NODE_OPTIONS=--max-old-space-size=6144` — tujuh build Next.js dalam satu pass akan OOM pada heap default.
- Stage `builder` membuat repo Git sementara. Script `build-scripts/generate-edited-dates` memanggil `git`; dengan repo throwaway yang bersih, script langsung early-return dan `generated/edit-dates.mjs` yang sudah ter-commit tetap dipakai.
- `.pnp.cjs`, `.pnp.loader.mjs`, dan `.yarn/install-state.gz` dihapus untuk mencegah ESM loader PnP membajak build (`ERR_LOADER_CHAIN_INCOMPLETE`).

## Aplikasi dan Port

| App | Port Internal | URL |
|-----|---------------|-----|
| book | 3001 | `http://localhost:8082/` |
| api-reference | 3000 | `http://localhost:8082/api` |
| ui | 3002 | `http://localhost:8082/ui` |
| resources | 3003 | `http://localhost:8082/resources` |
| user-guide | 3004 | `http://localhost:8082/user-guide` |
| bloom | 3005 | `http://localhost:8082/bloom` |
| cloud | 3006 | `http://localhost:8082/cloud` |

Port 3000-3006 hanya hidup di dalam container dan tidak diekspos ke host. Satu-satunya port yang dipetakan adalah `8082:80`.

## Konfigurasi

### Mengubah Port Host

Ubah pemetaan port pada `docker-compose.yml`:

```yaml
services:
  docs:
    ports:
      - "8082:80"   # ganti 8082 dengan port lain
```

### Akses via LAN

Pemetaan port Docker sudah bind ke semua interface, jadi container langsung dapat diakses dari perangkat lain di jaringan melalui `http://<IP-LAN>:8082`. Pastikan firewall mengizinkan port tersebut.

### Keepalive Timeout

Entrypoint membaca environment variable `KEEPALIVE_TIMEOUT` (default `70000` ms):

```yaml
services:
  docs:
    environment:
      - NODE_ENV=production
      - KEEPALIVE_TIMEOUT=70000
```

## Troubleshooting

**Port bentrok** — jika `8082` sudah dipakai, ganti pemetaan port di `docker-compose.yml`.

**502 Bad Gateway** — container sudah jalan tetapi ada app yang belum selesai starting, atau salah satu proses `next start` mati. Periksa `logs` untuk melihat port yang bermasalah.

**Kehabisan memori saat build** — Dockerfile sudah menyetel `NODE_OPTIONS=--max-old-space-size=6144`. Jika build tetap gagal, naikkan limit memori Docker atau turunkan concurrency Turbo menjadi `--concurrency=1` pada step build.

**`yarn install --immutable` gagal** — `www/yarn.lock` tidak sinkron dengan salah satu `package.json` workspace. Jalankan `yarn install` di dalam `www/` secara lokal lalu commit lockfile yang diperbarui.

**Menambah atau menghapus workspace** — stage `deps` pada `Dockerfile` menyalin setiap `package.json` workspace secara eksplisit. Workspace baru wajib punya baris `COPY` yang sesuai, kalau tidak proses install akan resolve terhadap tree yang tidak lengkap.

# Perubahan port dan base url
Perubahan port dan base url menuntut anda menentukan variable berikut untuk setiap .env sub dokumentasi

Untuk kemampuan pembacaaan markdown

```
NEXT_PUBLIC_POSTHOG_KEY=phc_dummykeyforlocaldev
NEXT_PUBLIC_POSTHOG_HOST=http://10.10.0.3:8082
```

Ubah semua nilai base url ke endpoint yang sama
```
NEXT_PUBLIC_BASE_URL=http://10.10.0.3:8082
```