# 🚀 PANDUAN DEPLOY NAGROG WEBSITE (15 menit)

## Path A: Tanpa Domain (GRATIS, 5 menit)

### 1. Daftar/Login GitHub
- Buka https://github.com → Sign up jika belum punya

### 2. Buat Repo Baru
- Klik tombol **+** di kanan atas → **New repository**
- Name: `nagrog-website`
- Public ✓
- Klik **Create repository**

### 3. Upload Files dari Folder Ini
Cara mudah (drag & drop):
- Di halaman repo baru, klik **uploading an existing file**
- Drag SEMUA file & folder dari `nagrog-website/` ke browser
- Commit message: "Initial commit"
- Klik **Commit changes**

### 4. Deploy ke Vercel
- Buka https://vercel.com → **Sign Up** with GitHub
- Klik **Add New... → Project**
- Pilih repo `nagrog-website`
- Klik **Deploy** (default settings sudah OK!)
- Tunggu ~2 menit ⏳

### 5. SELESAI! 🎉
Website kamu live di: `https://nagrog-website-[random].vercel.app`

---

## Path B: Dengan Domain Custom (Tambah 10 menit + Rp 150rb/tahun)

### 6. Beli Domain
Pilihan:
- **Niagahoster** → https://www.niagahoster.co.id/domain (~Rp 150rb/tahun .com)
- **Rumahweb** → https://www.rumahweb.com (~Rp 150rb/tahun .com)
- **Cloudflare Registrar** → https://www.cloudflare.com/products/registrar (~$10/tahun, tanpa markup)

Rekomendasi nama:
- `nagrog.com` — paling premium
- `nagrog.id` — premium tapi mahal (~Rp 500rb/tahun)
- `nagrog.co` — bagus untuk startup
- `nagrog.media` — descriptive

### 7. Hubungkan Domain ke Vercel
Di Vercel project kamu:
- **Settings → Domains**
- Add `nagrog.com`
- Vercel kasih DNS records yang perlu diset

Di registrar (Niagahoster/dll):
- Buka DNS Management
- Add records yang Vercel kasih:
  - Type: **A** | Name: **@** | Value: `76.76.21.21`
  - Type: **CNAME** | Name: **www** | Value: `cname.vercel-dns.com`
- Save

Tunggu propagasi DNS 5-60 menit ⏳

### 8. SELESAI! 🎉
Website kamu live di: `https://nagrog.com`

---

## Path C: Pakai Git CLI (Untuk Power User)

```bash
cd nagrog-website

# Init repo
git init
git add .
git commit -m "Initial commit: Nagrog Corp website"

# Buat repo di GitHub (jika punya gh CLI)
gh repo create nagrog-website --public --source=. --push

# Atau manual:
# 1. Buat repo kosong di github.com
# 2. Lalu:
git remote add origin https://github.com/USERNAME/nagrog-website.git
git branch -M main
git push -u origin main

# Deploy ke Vercel (jika punya vercel CLI)
npm i -g vercel
vercel --prod
```

---

## ⚙️ Setelah Deploy

### Test Local (Opsional)
```bash
cd nagrog-website
npm install
npm run dev
# Buka http://localhost:3000
```

### Auto-Deploy
Setiap kali kamu push ke GitHub → Vercel auto-rebuild + deploy.

### Connect ke Pipeline Nagrog Corp
Distribution Manager (agent baru) akan otomatis push artikel APPROVED ke repo ini setiap hari jam 07:00.

---

## 🆘 Troubleshooting

**Error "Build failed"**
- Cek log di Vercel dashboard
- Biasanya typo di package.json — pastikan semua dependencies ada

**Domain tidak konek**
- DNS propagation butuh waktu (max 60 menit)
- Cek di https://dnschecker.org

**Website 404**
- Pastikan file `app/page.tsx` ada di root
- Vercel deploy harus "Production" bukan "Preview"
