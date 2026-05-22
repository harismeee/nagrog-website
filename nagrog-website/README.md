# 🚀 Nagrog Corp — AI Media Website

Production-ready Next.js website untuk Nagrog Corp (AI Media Company).

## Quick Deploy ke Vercel

### Step 1: Push ke GitHub
```bash
cd nagrog-website
git init
git add .
git commit -m "Initial commit: Nagrog Corp website"
gh repo create nagrog-website --public --source=. --push
# atau manual: buat repo di github.com lalu push
```

### Step 2: Deploy ke Vercel
1. Buka https://vercel.com/new
2. Login dengan GitHub
3. Pilih repo `nagrog-website`
4. Klik **Deploy** (default settings sudah benar)
5. Tunggu ~2 menit → website live di `nagrog-website.vercel.app`

### Step 3: Custom Domain (Opsional)
1. Beli domain (nagrog.com / nagrog.id) di Niagahoster/Rumahweb
2. Di Vercel project → Settings → Domains → Add `nagrog.com`
3. Update DNS di registrar:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## Struktur

```
nagrog-website/
├── package.json           # Dependencies
├── next.config.js
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   ├── articles/
│   │   ├── page.tsx      # Article listing
│   │   └── [slug]/page.tsx
│   └── newsletter/page.tsx
├── content/
│   └── articles/         # Markdown files dari Article Writer agent
└── public/               # Static assets
```

## Connect dengan Nagrog Corp Pipeline

Agent **Distribution Manager** akan auto-push artikel APPROVED:
- File: `data/articles.md` (workspace Paperclip)
- Convert ke individual markdown di `content/articles/[slug].md`
- Push ke GitHub (auto-deploy ke Vercel)

## Monetization Setup

Setelah live + 50 artikel:
1. **AdSense**: ads.txt sudah disiapkan, tinggal masukkan publisher ID
2. **Newsletter signup**: form Substack/Buttondown sudah embedded
3. **Affiliate links**: Article Writer + Affiliate Manager inject otomatis
