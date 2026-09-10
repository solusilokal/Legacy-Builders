# Legacy Builders - Mini Website

Website resmi mobile-friendly modern untuk **Legacy Builders - Kontraktor & Desain Bangunan Terpercaya**, dibangun dengan **React**, **Vite**, **Tailwind CSS**, dan **Lucide Icons**.

- **Live Website**: [https://solusilokal.github.io/Legacy-Builders/](https://solusilokal.github.io/Legacy-Builders/)
- **GitHub Repository**: [https://github.com/solusilokal/Legacy-Builders](https://github.com/solusilokal/Legacy-Builders)

---

## 📁 Struktur Folder Proyek

```text
konstruksi kontraktor/
├── .github/
│   └── workflows/
│       └── deploy.yml                         # Otomatisasi deploy GitHub Pages
├── dist/                                      # Hasil build produksi siap rilis
├── node_modules/                              # Dependensi npm yang terinstal
├── public/                                    # Aset statis (logo, favicon, foto galeri, SEO)
│   ├── favicon.ico
│   ├── favicon.png
│   ├── galeri-1.webp s/d galeri-5.webp
│   ├── hero-legacy-builders.jpg
│   ├── logo-legacy-builders.png
│   └── og-image.png
├── src/                                       # Source code aplikasi React
│   ├── App.tsx                                # Komponen utama halaman Legacy Builders
│   ├── index.css                              # Konfigurasi Tailwind & styling scrollbar
│   └── main.tsx                               # Entry point React DOM
├── .gitignore                                 # Git ignore file
├── deploy_github.bat                          # Script deploy 1-klik ke GitHub
├── index.html                                 # Template HTML utama Vite (metadata SEO)
├── login_github.bat                           # Script login akun GitHub via gh
├── package.json                               # Dependencies & npm scripts
├── postcss.config.js                          # Konfigurasi PostCSS & Autoprefixer
├── preview.bat                                # Peluncur preview 1-klik (Vite Dev Server)
├── standalone.html                            # Versi mandiri HTML (langsung double-click di browser)
├── tailwind.config.js                         # Konfigurasi Tailwind CSS
├── vite.config.js                             # Konfigurasi Vite server (Port 3000)
└── README.md                                  # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Preview

Ada 2 cara mudah untuk melihat preview website ini secara lokal:

### Opsi 1: Klik Ganda `preview.bat` (Rekomendasi)
Cukup **klik dua kali** pada file [`preview.bat`](./preview.bat).
Script akan secara otomatis mendeteksi Node.js, memastikan dependensi terinstal, dan menjalankan dev server di browser pada alamat:
`http://localhost:3000`

### Opsi 2: Langsung Buka `standalone.html` (Tanpa Perlu Terminal/Server)
Cukup **klik dua kali** file [`standalone.html`](./standalone.html) untuk langsung membukanya di browser Chrome, Edge, atau Firefox tanpa instalasi apa pun.

### Opsi 3: Menggunakan Perintah Terminal (PowerShell / Command Prompt)
```bash
# Jalankan development server
npm run dev

# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

---

## 🌐 Deploy ke GitHub Pages

Proyek ini telah dikonfigurasikan dengan GitHub Actions untuk auto-deploy:
1. Pastikan perubahan telah disimpan.
2. Cukup klik dua kali file [`deploy_github.bat`](./deploy_github.bat).
3. Script akan otomatis melakukan build produksi, commit perubahan, dan push ke repository GitHub.
4. GitHub Actions akan otomatis meng-update situs live di:
   [https://solusilokal.github.io/Legacy-Builders/](https://solusilokal.github.io/Legacy-Builders/)

---

## 💡 Fitur-Fitur Website:
- **Hero & Profile:** Tampilan elegan kontraktor profesional dengan tombol navigasi cepat ke Instagram, TikTok, dan Google Maps.
- **Statistik & Tentang Kami:** Informasi pengalaman 10+ tahun, 150+ proyek selesai, dan jaminan mutu garansi.
- **Sejarah Perjalanan (Timeline):** Perjalanan dedikasi perusahaan dari awal berdiri hingga tingkat nasional.
- **Katalog Layanan & Portofolio Proyek:** Kartu layanan dan carousel foto portofolio dilengkapi dengan modal Lightbox responsif (Next/Prev) dan keterangan proyek.
- **Estimasi Harga Paket:** Paket Standar, Paket Premium (rekomendasi), dan Paket Mewah beserta rincian material & spesifikasi.
- **Tanya Jawab (FAQ):** Accordion interaktif seputar survei gratis dan garansi.
- **Lokasi & Kontak:** Penunjuk kantor pusat Palangka Raya dengan tombol integrasi ke Google Maps.
- **Testimoni Klien:** Testimoni terpercaya dengan ulasan rating bintang dari klien.
- **Formulir Konsultasi & Survei Gratis:** Form terintegrasi otomatis ke WhatsApp resmi dengan template pesan siap kirim.
- **Sticky CTA Bar:** Tombol mengambang di bawah layar saat scroll untuk kemudahan booking konsultasi.
- **Modal Bagikan (Share):** Fitur bagikan tautan, salin link instan, WhatsApp, Facebook, dan X / Twitter.
- **Optimasi SEO Lengkap:** Open Graph & Twitter Card dengan gambar poster resmi 705x945 px dan favicon browser.
