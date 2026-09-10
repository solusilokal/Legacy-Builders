import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Star,
  Quote,
  HardHat,
  Ruler,
  Building2,
  Hammer,
  History,
  Info,
  Banknote,
  HelpCircle,
  ChevronDown,
  HammerIcon,
  ShieldCheck,
  Clock
} from 'lucide-react';

const pageData = {
  name: "Legacy Builders",
  phone: "6289529605601",
  address: "Jl. Yos Sudarso, Jekan Raya, Palangka Raya, Kalimantan Tengah",
  title: "Membangun Impian, Menciptakan Warisan",
  description: "Kontraktor terpercaya dengan spesialisasi residensial dan komersial. Kami menghadirkan kualitas standar industri tinggi, desain presisi, dan ketepatan waktu pengerjaan.",
  profileImg: "./logo-legacy-builders.png", 
  heroImg: "./hero-legacy-builders.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://maps.google.com/?q=Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  companyStats: [
    { value: "10+", label: "Tahun Pengalaman" },
    { value: "150+", label: "Proyek Selesai" },
    { value: "100%", label: "Garansi Kualitas" }
  ],
  about: "Legacy Builders adalah perusahaan konstruksi dan arsitektur yang berdedikasi untuk memberikan solusi pembangunan terintegrasi. Sejak awal berdiri, komitmen kami adalah menghadirkan struktur yang tidak hanya kokoh dan aman, tetapi juga memiliki nilai estetika tinggi yang bertahan lintas generasi.",
  history: [
    { year: "2014", title: "Awal Berdiri", desc: "Dimulai dari tim kecil yang menangani proyek renovasi rumah dan desain interior di Jakarta." },
    { year: "2018", title: "Ekspansi Komersial", desc: "Mulai menangani proyek berskala menengah seperti ruko, kafe, dan bangunan kantor." },
    { year: "2023", title: "Kontraktor Nasional", desc: "Dianugerahi sebagai salah satu kontraktor inovatif dengan ratusan portofolio tersebar di seluruh Indonesia." }
  ],
  services: [
    { name: "Bangun Rumah Baru", icon: "Home" },
    { name: "Konstruksi Komersial", icon: "Building2" },
    { name: "Renovasi Total & Parsial", icon: "Hammer" },
    { name: "Desain Arsitektur", icon: "Ruler" }
  ],
  pricing: [
    { plan: "Paket Standar", price: "Rp 3.500.000", unit: "/ m2", features: ["Pondasi Batu Kali", "Dinding Bata Merah", "Lantai Granit 60x60", "Plafon Gypsum", "Garansi Retensi 3 Bulan"] },
    { plan: "Paket Premium", price: "Rp 4.500.000", unit: "/ m2", features: ["Pondasi Cakar Ayam", "Dinding Bata Merah/Hebel", "Lantai Granit 80x80", "Sanitary TOTO", "Garansi Retensi 6 Bulan"], recommended: true },
    { plan: "Paket Mewah", price: "Mulai Rp 6.000.000", unit: "/ m2", features: ["Desain Custom Eksklusif", "Smart Home System", "Lantai Marmer/Granit Premium", "Interior Build-in", "Garansi Retensi 1 Tahun"] }
  ],
  faq: [
    { q: "Apakah Legacy Builders melayani jasa desain arsitektur saja?", a: "Ya, kami memiliki tim arsitek in-house untuk pembuatan desain fasad, denah, hingga gambar kerja lengkap." },
    { q: "Bagaimana sistem pembayaran untuk proyek pembangunan?", a: "Pembayaran dilakukan secara bertahap (termin) menyesuaikan dengan progres fisik di lapangan yang tertuang dalam Surat Perjanjian Kontrak (SPK)." },
    { q: "Apakah ada garansi setelah bangunan selesai?", a: "Tentu. Kami memberikan masa retensi (garansi pemeliharaan) mulai dari 3 bulan hingga 1 tahun tergantung skala proyek dan paket yang dipilih." }
  ],
  testimonials: [
    { name: "Bapak Hendra", rating: 5, text: "Proses bangun rumah impian keluarga kami berjalan sangat lancar. Material yang digunakan sesuai spesifikasi dan selesai tepat waktu." },
    { name: "Ibu Sarah", rating: 5, text: "Renovasi kantor berjalan cepat tanpa mengganggu operasional terlalu lama. Timnya profesional dan komunikatif." },
    { name: "Andi Wijaya", rating: 4, text: "Kualitas finishing sangat rapi. Ada sedikit revisi di bagian taman tapi tim Legacy Builders langsung tanggap membereskannya." }
  ],
  galleryPhotos: [
    "./galeri-1.webp",
    "./galeri-2.webp",
    "./galeri-3.webp",
    "./galeri-4.webp",
    "./galeri-5.webp"
  ],
  galleryCaptions: [
    "Gedung Komersial & Perkantoran Modern",
    "Infrastruktur Jembatan & Struktur Beton",
    "Hunian Residensial Mewah 2 Lantai",
    "Drainase & Infrastruktur Sipil Perkotaan",
    "Kawasan Industri & Bangunan Pabrik"
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky CTA
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky nav
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const projectType = formData.get('projectType');
    const area = formData.get('area');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20*${pageData.name}*,%20saya%20${name}.%20Saya%20ingin%20berkonsultasi%20mengenai%20proyek%20*${projectType}*%20dengan%20estimasi%20luas%20${area}.%0A%0ACatatan:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      const tempInput = document.createElement('input');
      tempInput.value = window.location.href;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderServiceIcon = (iconName) => {
    switch(iconName) {
      case 'Home': return <Building2 size={24} />;
      case 'Building2': return <Building2 size={24} />;
      case 'Hammer': return <Hammer size={24} />;
      case 'Ruler': return <Ruler size={24} />;
      default: return <HardHat size={24} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F1F5F9;
          color: #0F172A;
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .nav-item.active {
          background-color: #0F172A;
          color: #F59E0B;
          border-color: #0F172A;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32 border-x border-slate-200">
        
        {/* HERO SECTION */}
        <section id="beranda" className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-slate-900">
          
          <button
            type="button"
            onClick={handleShare}
            aria-label="Bagikan profil Legacy Builders"
            title="Bagikan Halaman"
            className="absolute top-6 right-6 z-30 p-3.5 bg-slate-900/60 hover:bg-slate-900/90 active:scale-90 backdrop-blur-md rounded-full border border-white/20 text-white transition-all shadow-lg cursor-pointer flex items-center justify-center group"
          >
            <Share size={20} className="group-hover:scale-110 transition-transform" />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/40"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-28 h-28 rounded-2xl p-2 bg-white backdrop-blur-md mb-6 shadow-2xl border-2 border-amber-500/80 rotate-3 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-xl object-contain"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <HardHat size={14} /> Kontraktor Profesional
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
              {pageData.name}
            </h1>
            <p className="text-slate-300 font-normal text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.title}
            </p>

            {/* Tombol Sosial di Hero Section */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-600 hover:bg-slate-700 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a 
                href={pageData.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-600 hover:bg-slate-700 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-800/80 backdrop-blur-md border border-slate-600 hover:bg-slate-700 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <MapPin size={18} /> Lokasi
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('konsultasi-form')}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-amber-500 text-slate-900 rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Mulai Konsultasi
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* STATISTIK & TENTANG KAMI */}
        <section id="tentang" className="py-10 px-6 bg-white border-b border-slate-100">
          <div className="flex flex-wrap justify-between gap-4 w-full mb-10 bg-slate-900 rounded-2xl p-6 text-white shadow-lg">
            {pageData.companyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 min-w-[30%]">
                <span className="text-2xl font-black text-amber-500">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 mt-1 text-center font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                <Info size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 text-[14px] leading-relaxed text-justify">
              {pageData.about}
            </p>
            <p className="text-slate-600 text-[14px] leading-relaxed text-justify mt-2">
              {pageData.description}
            </p>
          </div>
        </section>

        {/* HISTORY / SEJARAH */}
        <section id="sejarah" className="py-10 px-6 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-slate-200 rounded-lg text-slate-700">
              <History size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Perjalanan Kami</h2>
          </div>

          <div className="relative border-l-2 border-slate-300 ml-3 md:ml-4 flex flex-col gap-8">
            {pageData.history.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1 border-4 border-slate-50"></div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-amber-600 mb-1">{item.year}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KATALOG LAYANAN & PROYEK */}
        <section id="katalog" className="py-10 bg-white">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                <Hammer size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Katalog Layanan</h2>
            </div>
            <p className="text-slate-500 text-sm">Solusi konstruksi terpadu untuk segala kebutuhan Anda.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 px-6 mb-10">
            {pageData.services.map((svc, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="bg-white p-3 rounded-xl text-amber-600 shadow-sm border border-slate-100">
                  {renderServiceIcon(svc.icon)}
                </div>
                <span className="text-[13px] font-bold text-slate-800 leading-tight">{svc.name}</span>
              </div>
            ))}
          </div>

          <div className="px-6 mb-4">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Portofolio Proyek</h3>
            <p className="text-slate-500 text-xs">Beberapa hasil karya terbaik tim kami.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.galleryPhotos.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.galleryPhotos, idx)}
                className="snap-center shrink-0 w-[240px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer relative group border border-slate-200 shadow-sm bg-slate-100"
              >
                <img 
                  src={img} 
                  alt={"Proyek " + (idx + 1)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Portofolio</span>
                  <span className="text-white text-xs font-semibold leading-tight">{pageData.galleryCaptions[idx]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HARGA / ESTIMASI */}
        <section id="harga" className="py-10 px-6 bg-slate-900 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-slate-800 rounded-lg text-amber-400 border border-slate-700">
              <Banknote size={20} />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Estimasi Harga</h2>
          </div>
          <p className="text-slate-400 text-sm mb-8">Pilih paket pembangunan yang sesuai dengan anggaran dan kebutuhan material Anda.</p>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pt-6 pb-4 no-scrollbar">
            {pageData.pricing.map((paket, idx) => (
              <div key={idx} className={`snap-center shrink-0 w-[280px] p-6 rounded-2xl flex flex-col relative ${paket.recommended ? 'bg-amber-500 text-slate-900 shadow-xl ring-2 ring-amber-400/50' : 'bg-slate-800 border border-slate-700 text-white'}`}>
                {paket.recommended && (
                  <div className="absolute -top-3.5 right-5 bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-amber-400 shadow-2xl flex items-center gap-1.5 z-20">
                    <Star size={13} className="fill-amber-400 text-amber-400 shrink-0" />
                    <span>TERPOPULER</span>
                  </div>
                )}
                <h3 className="text-lg font-black mb-2">{paket.plan}</h3>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold">{paket.price}</span>
                  <span className={`text-sm ${paket.recommended ? 'text-slate-700' : 'text-slate-400'}`}>{paket.unit}</span>
                </div>
                
                <div className="flex flex-col gap-3 mt-auto">
                  {paket.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-sm font-medium">
                      <Check size={16} className={`shrink-0 mt-0.5 ${paket.recommended ? 'text-slate-900' : 'text-amber-500'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-10 px-6 bg-white border-b border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
              <HelpCircle size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Tanya Jawab (FAQ)</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faq.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="font-semibold text-[14px] text-slate-800 pr-4">{item.q}</span>
                  <ChevronDown size={18} className={`text-slate-500 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-4 bg-white text-[13px] text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI & KONTAK */}
        <section id="lokasi" className="py-10 px-6 bg-slate-50">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600 shrink-0 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Kantor Pusat</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pageData.address}</p>
              </div>
            </div>
            
            <a 
              href={pageData.links.maps}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl text-center hover:bg-slate-800 transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        {/* TESTIMONI KLIEN */}
        <section className="py-10 px-6 bg-white border-y border-slate-200">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                <Quote size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Kata Klien Kami</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KONSULTASI FORM */}
        <section id="konsultasi-form" className="py-12 px-6 bg-slate-100">
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck size={14} /> Bebas Biaya Survei
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-2">Mulai Proyek Anda</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Isi form di bawah untuk menjadwalkan konsultasi gratis dan survei lokasi dengan tim ahli kami via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-300 ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Cth: Budi Santoso"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-300 ml-1">Jenis Proyek</label>
                <select 
                  name="projectType" 
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none"
                >
                  <option value="" className="text-slate-500">Pilih jenis bangunan...</option>
                  <option value="Bangun Rumah Baru">Bangun Rumah Baru</option>
                  <option value="Renovasi Rumah">Renovasi Rumah</option>
                  <option value="Bangun Ruko / Komersial">Bangun Ruko / Komersial</option>
                  <option value="Desain Interior & Fit Out">Desain Interior & Fit Out</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-300 ml-1">Estimasi Luas Lahan/Bangunan</label>
                <input 
                  type="text" 
                  name="area" 
                  required
                  placeholder="Cth: 120 m2"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-slate-300 ml-1">Pesan / Detail Tambahan</label>
                <textarea 
                  name="notes" 
                  rows="3"
                  placeholder="Ceritakan singkat rencana pembangunan Anda..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-amber-500 text-slate-900 font-extrabold text-[14px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors shadow-lg"
              >
                Kirim Pesan WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-slate-900">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 p-1.5 overflow-hidden border border-slate-200">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain rounded-lg" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-800 text-sm tracking-wide">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[11px] mt-8 font-medium">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[11px] mt-2 tracking-wide font-medium hover:text-amber-600 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={() => scrollToSection('konsultasi-form')}
            className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 backdrop-blur-xl border border-slate-700 rounded-2xl text-white shadow-[0_10px_30px_rgba(15,23,42,0.4)] hover:bg-slate-800 active:scale-[0.98] transition-all"
          >
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm tracking-wide text-amber-500">Konsultasi Gratis</span>
              <span className="text-[10px] text-slate-300">Jadwalkan survei proyek</span>
            </div>
            <div className="bg-amber-500 text-slate-900 p-2.5 rounded-xl">
              <HardHat size={20} className="stroke-[2.5]" />
            </div>
          </button>
        </div>

      </main>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20 hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
            />
            {pageData.galleryCaptions && (
              <p className="text-white text-xs md:text-sm font-semibold mt-3 bg-slate-900/80 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md text-center shadow-lg">
                {pageData.galleryCaptions[lightbox.currentIndex]}
              </p>
            )}
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20 hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Mobile controls */}
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 md:hidden">
              <button onClick={prevImage} className="p-3 bg-white/20 rounded-full text-white backdrop-blur-md">
                <ChevronLeft size={20} />
              </button>
              <span className="text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                {lightbox.currentIndex + 1} / {lightbox.images.length}
              </span>
              <button onClick={nextImage} className="p-3 bg-white/20 rounded-full text-white backdrop-blur-md">
                <ChevronRight size={20} />
              </button>
            </div>
          )}
          
          {/* Desktop indicator */}
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 hidden md:block">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center transition-all p-0 sm:p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5 relative">
              <h3 className="text-slate-900 font-bold text-base">Bagikan Profil {pageData.name}</h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
                aria-label="Tutup Modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mb-5 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[60px] h-[60px] rounded-xl border border-slate-200 mb-2.5 object-contain bg-white p-1 shadow-sm" />
              <h4 className="text-slate-900 font-bold text-sm text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-xs text-center font-medium opacity-90 line-clamp-1">{pageData.title}</p>
            </div>

            {/* Tombol Berbagi Cepat */}
            <div className="grid grid-cols-4 gap-2.5 mb-5">
              {/* Salin Tautan */}
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all shadow-sm border ${
                  copied 
                    ? 'bg-emerald-500 border-emerald-600 text-white ring-2 ring-emerald-500/30' 
                    : 'bg-slate-100 border-slate-200 text-slate-700 group-hover:bg-slate-200 active:scale-95'
                }`}>
                  {copied ? <Check size={22} className="text-white" /> : <Copy size={20} />}
                </div>
                <span className={`text-[11px] font-semibold text-center leading-tight ${copied ? 'text-emerald-600 font-bold' : 'text-slate-600'}`}>
                  {copied ? 'Tersalin!' : 'Salin Link'}
                </span>
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={() => {
                  const shareUrl = `https://wa.me/?text=${encodeURIComponent(pageData.name + ' - ' + pageData.title + '\n' + window.location.href)}`;
                  window.open(shareUrl, '_blank');
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-sm hover:brightness-105 active:scale-95 transition-all">
                  <MessageCircle size={22} className="fill-current" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center leading-tight">WhatsApp</span>
              </button>

              {/* Facebook */}
              <button
                type="button"
                onClick={() => {
                  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                  window.open(shareUrl, '_blank');
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shadow-sm hover:brightness-105 active:scale-95 transition-all">
                  <Facebook size={22} className="fill-current" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center leading-tight">Facebook</span>
              </button>

              {/* Twitter / X */}
              <button
                type="button"
                onClick={() => {
                  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageData.name + ' - ' + pageData.title)}&url=${encodeURIComponent(window.location.href)}`;
                  window.open(shareUrl, '_blank');
                }}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-sm hover:bg-slate-800 active:scale-95 transition-all">
                  <Twitter size={20} className="fill-current" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600 text-center leading-tight">X / Twitter</span>
              </button>
            </div>

            {/* Input Link Tautan */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 pl-3 rounded-xl border border-slate-200 mb-3">
              <input
                type="text"
                readOnly
                value={typeof window !== 'undefined' ? window.location.href : ''}
                className="bg-transparent text-xs text-slate-600 flex-1 outline-none truncate select-all"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                className={`px-3 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  copied 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'
                }`}
              >
                {copied ? 'Tersalin' : 'Salin'}
              </button>
            </div>

            {/* Tombol Opsi Native Share jika didukung browser */}
            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.share({
                      title: pageData.name,
                      text: pageData.title,
                      url: window.location.href,
                    });
                  } catch (err) {}
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <Share size={14} /> Berbagi via Menu Sistem...
              </button>
            )}
            
          </div>
        </div>
      )}
    </>
  );
}