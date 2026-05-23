import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Building2, BookOpen, ShieldCheck, ArrowRight, Stamp } from 'lucide-react';
import { SEO } from '../components/SEO';

const NOTARIS_IMAGE_URL = "https://drive.google.com/thumbnail?id=1-ZqY1TyDytnUb8s3tu3Cxl5t8VJswAiv&sz=w1000";

export function Home() {
  const notarySchema = {
    "@context": "https://schema.org",
    "@type": "Notary",
    "name": "Notaris & PPAT Setyo Budhi Laksmana, S.H., M.Kn.",
    "image": NOTARIS_IMAGE_URL,
    "telephone": "+6282140490006",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Jendral Achmad Yani No. 134, Kepatihan, Kaliwates",
      "addressLocality": "Jember",
      "postalCode": "68137",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$"
  };

  const services = [
    {
      title: "Akta Pendirian Badan Usaha",
      description: "Pendirian PT, CV, Yayasan, dan Perkumpulan sesuai perundang-undangan.",
      icon: <Building2 className="w-8 h-8 text-amber-700" />
    },
    {
      title: "Urusan Pertanahan (PPAT)",
      description: "Jual Beli, Hibah, Pembagian Hak Bersama, Pemberian Hak Tanggungan.",
      icon: <FileText className="w-8 h-8 text-amber-700" />
    },
    {
      title: "Legalisasi & Waarmerking",
      description: "Pengesahan tanda tangan dan pendaftaran surat di bawah tangan.",
      icon: <Stamp className="w-8 h-8 text-amber-700" />
    },
    {
      title: "Konsultasi Hukum",
      description: "Memberikan pandangan hukum obyektif terkait kenotariatan.",
      icon: <BookOpen className="w-8 h-8 text-amber-700" />
    }
  ];

  return (
    <div>
      <SEO 
        title="Beranda" 
        description="Kantor Notaris & PPAT Setyo Budhi Laksmana, S.H., M.Kn. di Jember. Melayani pembuatan akta, legalisir, surat kepemilikan tanah, dan konsultasi hukum dengan integritas."
        schema={notarySchema}
      />
      {/* Hero Section */}
      <section className="relative bg-slate-900 border-b-8 border-amber-700">
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle background pattern or image can go here */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="text-amber-500 w-6 h-6" />
              <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Kepastian & Integritas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Layanan Kenotariatan & Pertanahan Profesional.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Memberikan solusi hukum yang tepat, akurat, dan terpercaya untuk melindungi aset dan kepentingan legal Anda di wilayah Jember dan sekitarnya.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/services" 
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-md font-semibold text-center transition-colors"
              >
                Eksplorasi Layanan
              </Link>
              <a 
                href="https://wa.me/6282140490006" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-center transition-colors"
                style={{ textDecoration: 'none' }}
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src={NOTARIS_IMAGE_URL} 
                  alt="Setyo Budhi Laksmana, S.H., M.Kn." 
                  className="rounded-lg shadow-xl object-cover aspect-[4/5] w-full max-w-md mx-auto object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl border-l-4 border-amber-700 hidden md:block">
                  <p className="font-serif font-bold text-xl">SK Menteri Kemenkumham</p>
                  <p className="text-amber-500 font-mono mt-1 text-sm">AHU-01017.AH.02.01.2023</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Setyo Budhi Laksmana</h2>
              <p className="text-lg font-medium text-amber-700 mb-6">S.H., M.Kn. - Notaris Kabupaten Jember</p>
              
              <div className="prose prose-slate prose-lg">
                <p>
                  Berdedikasi untuk memberikan pelayanan hukum kenotariatan dan ke-PPAT-an yang profesional di wilayah <strong>Kabupaten Jember</strong> dan sekitarnya. Kami berkomitmen untuk menjaga kerahasiaan klien dan memastikan setiap dokumen yang dibuat memiliki kepastian dan kekuatan hukum yang kuat.
                </p>
                <p>
                  Sesuai dengan Undang-Undang Jabatan Notaris (UUJN), kami berwenang membuat Akta Otentik mengenai semua perbuatan, perjanjian, dan ketetapan yang diharuskan oleh peraturan perundang-undangan dan/atau yang dikehendaki oleh yang berkepentingan untuk dinyatakan dalam Akta Otentik.
                </p>
              </div>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <ShieldCheck className="text-amber-600 mr-3 w-5 h-5" /> Kerahasiaan Klien Terjamin
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <ShieldCheck className="text-amber-600 mr-3 w-5 h-5" /> Proses Berstandar Baku
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <ShieldCheck className="text-amber-600 mr-3 w-5 h-5" /> Edukatif & Transparan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Layanan Utama</h2>
            <p className="text-slate-600">
              Pelayanan prima dalam pengurusan berbagai akta dan dokumen hukum demi kepastian kegiatan perdata maupun bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-amber-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-amber-700 font-medium text-sm flex items-center hover:text-amber-800">
                  Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
