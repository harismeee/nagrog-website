# 🔄 UPDATE NAGROG WEBSITE — Pipeline Integration

## Yang Sudah Ditambahkan

✅ **Dynamic article rendering** — markdown files di `content/articles/` otomatis jadi halaman web
✅ **Article listing page** — `/articles` (semua artikel)
✅ **Article detail page** — `/articles/[slug]` (per artikel)
✅ **SEO metadata** — meta tags, OpenGraph, JSON-LD Article schema
✅ **Sample article** — "Selamat Datang di Nagrog Corp"

## Cara Update Website Live Kamu

### Opsi 1: Copy file baru ke folder lokal (Mudah)

1. Download file zip update kit
2. Extract — kamu akan dapat folder dengan file BARU/UPDATED:
   - `app/articles/page.tsx` (BARU)
   - `app/articles/[slug]/page.tsx` (BARU)
   - `lib/articles.ts` (BARU)
   - `content/articles/selamat-datang-nagrog.md` (BARU)
   - `package.json` (sudah include gray-matter + remark)

3. Copy semua file BARU ke folder `C:\Users\Haris\nagrog-website\`
   - Folder `app/articles/` baru
   - Folder `lib/` baru
   - Folder `content/articles/` baru
   - package.json overwrite

4. Buka terminal di folder `nagrog-website`:
```bash
git add .
git commit -m "Add dynamic article rendering + sample article"
git push origin main
```

5. Vercel otomatis deploy ~2 menit
6. Cek di browser: `https://nagrog-website-7wpbgvlzx-harismeees-projects.vercel.app/articles`

### Opsi 2: Clone dari awal (lebih clean)

```bash
# Hapus folder lama (BACKUP DULU kalau ada perubahan!)
cd ..
rm -rf nagrog-website-old
mv nagrog-website nagrog-website-old

# Clone fresh dari GitHub
git clone https://github.com/USERNAME/nagrog-website.git
cd nagrog-website

# Extract update kit di sini, lalu push
git add .
git commit -m "Add dynamic article rendering"
git push
```

---

## Struktur Folder Sekarang

```
nagrog-website/
├── app/
│   ├── articles/
│   │   ├── page.tsx              ← Listing semua artikel
│   │   └── [slug]/
│   │       └── page.tsx          ← Detail artikel (SEO ready)
│   ├── layout.tsx
│   ├── page.tsx                  ← Homepage
│   └── globals.css
├── content/
│   └── articles/                 ← Distribution Manager push ke sini!
│       └── selamat-datang-nagrog.md  ← Sample
├── lib/
│   └── articles.ts               ← Markdown parser
└── package.json                  ← Sudah include gray-matter + remark
```

---

## Bagaimana Distribution Manager akan Auto-Push?

Setelah update website ini live, Distribution Manager (di Paperclip) akan:

1. **Setiap hari 07:00 WIB**:
   - Baca `data/articles.md` (output Article Writer)
   - Filter artikel APPROVED hari ini
   - Convert ke individual `.md` di `C:\Users\Haris\nagrog-website\content\articles\[slug].md`
   - `git add` + `git commit` + `git push`
   - Vercel auto-deploy

2. **Hasilnya**: Setiap pagi jam 07:00, ada 3 artikel BARU di website kamu! 🎉

---

## ⚠️ Penting: Lokasi Repo Lokal

Distribution Manager dikonfigurasi pakai path: **`C:\Users\Haris\nagrog-website\`**

Kalau folder kamu di lokasi BERBEDA, kasih tahu saya path yang benar.

Cara cek path folder kamu di Windows:
```bash
cd nagrog-website
pwd
# atau di Windows CMD:
cd
```

---

## Test Manual

Untuk test apakah pipeline jalan (sebelum agent jalan otomatis), kamu bisa:

```bash
cd C:\Users\Haris\nagrog-website

# Buat artikel test
echo "---
title: 'Test Article'
date: '2026-05-22'
category: 'Test'
excerpt: 'Testing'
---
## Hello

Test content." > content/articles/test.md

git add .
git commit -m "Test article"
git push

# Tunggu 2 menit, buka:
# https://nagrog-website-7wpbgvlzx-harismeees-projects.vercel.app/articles
```
