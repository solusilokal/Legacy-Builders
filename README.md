# Legacy Builders - Mini Website

Website resmi mobile-friendly modern untuk **Legacy Builders - Kontraktor & Desain Bangunan Terpercaya**, dibangun dengan **React**, **Vite**, **Tailwind CSS**, dan **Lucide Icons**.

---

## 📁 Struktur Folder Proyek

```text
konstruksi kontraktor/
├── dist/                                      # Hasil build produksi siap rilis
├── node_modules/                              # Dependensi npm yang terinstal
├── src/                                       # Source code aplikasi React
│   ├── App.tsx                                # Komponen utama halaman Legacy Builders
│   ├── index.css                              # Konfigurasi Tailwind & styling scrollbar
│   └── main.tsx                               # Entry point React DOM
├── .gitignore                                 # Git ignore file
├── index.html                                 # Template HTML utama Vite (metadata SEO)
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

Ada 2 cara mudah untuk melihat preview website ini:

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

## 💡 Fitur-Fitur Website:
- **Hero & Profile:** Tampilan elegan kontraktor profesional dengan tombol navigasi cepat ke Instagram, TikTok, dan Google Maps.
- **Statistik & Tentang Kami:** Informasi pengalaman 10+ tahun, 150+ proyek, dan jaminan mutu.
- **Sejarah Perjalanan (Timeline):** Timeline perjalanan dedikasi perusahaan dari awal berdiri hingga tingkat nasional.
- **Katalog Layanan & Portofolio Proyek:** Kartu layanan dan carousel foto portofolio dilengkapi dengan modal Lightbox responsif (Next/Prev).
- **Estimasi Harga Paket:** Paket Standar, Paket Premium (rekomendasi), dan Paket Mewah beserta rincian material & spesifikasi.
- **Tanya Jawab (FAQ):** Accordion interaktif yang responsif dan mudah digunakan.
- **Lokasi & Kontak:** Penunjuk kantor pusat Palangka Raya dengan tombol integrasi ke Google Maps.
- **Testimoni Klien:** Testimoni terpercaya dengan ulasan bintang dari klien.
- **Formulir Konsultasi & Survei Gratis:** Form terintegrasi otomatis ke WhatsApp resmi dengan template pesan siap kirim.
- **Sticky CTA Bar:** Tombol mengambang di bawah layar saat scroll untuk kemudahan booking konsultasi.
- **Modal Bagikan (Share):** Fitur bagikan tautan, salin link instan, dan integrasi WhatsApp.
