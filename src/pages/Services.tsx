import React from 'react';
import { Building2, FileSignature, Stamp, PenTool, Scale, LandPlot } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Services() {
  const allServices = [
    {
      category: "Pendirian Badan Usaha",
      icon: <Building2 className="w-10 h-10 text-amber-700" />,
      items: [
        { title: "Akta Pendirian PT (Perseroan Terbatas)", desc: "Pembuatan akta pendirian perusahaan berbadan hukum dengan struktur mumpuni." },
        { title: "Akta Pendirian CV (Commanditaire Vennootschap)", desc: "Dokumen legal pendirian persekutuan perdata untuk skala usaha menengah." },
        { title: "Pendirian Yayasan & Perkumpulan", desc: "Legalitas untuk entitas nirlaba, sosial, maupun keagamaan." }
      ]
    },
    {
      category: "Layanan Pertanahan (PPAT)",
      icon: <LandPlot className="w-10 h-10 text-amber-700" />,
      items: [
        { title: "Akta Jual Beli (AJB)", desc: "Pembuatan akta peralihan hak atas tanah dan/atau bangunan." },
        { title: "Akta Hibah", desc: "Peralihan hak yang dilakukan semasa hidup pemilik secara sukarela." },
        { title: "Pemberian Hak Tanggungan (APHT)", desc: "Pengikatan jaminan atas tanah untuk keperluan kredit perbankan." },
        { title: "Akta Pembagian Hak Bersama (APHB)", desc: "Pemisahan atau pembagian hak atas tanah yang dimiliki bersama." }
      ]
    },
    {
      category: "Kewenangan UUJN Khusus",
      icon: <Stamp className="w-10 h-10 text-amber-700" />,
      items: [
        { title: "Legalisasi", desc: "Mengesahkan tanda tangan dan menetapkan kepastian tanggal surat di bawah tangan dengan mendaftarkannya dalam buku khusus." },
        { title: "Waarmerking", type: "strong", desc: "Membukukan surat di bawah tangan dengan mendaftarkannya dalam buku khusus tanpa mengesahkan isinya." },
        { title: "Copy Collationnee", desc: "Pengesahan kecocokan fotokopi dengan surat aslinya." },
        { title: "Pembuatan Akta Risalah Lelang", desc: "Bagi notaris yang telah diangkat menjadi Pejabat Lelang Kelas II." }
      ]
    },
    {
      category: "Perjanjian Kenotariatan Lainnya",
      icon: <FileSignature className="w-10 h-10 text-amber-700" />,
      items: [
        { title: "Akta Perjanjian Kawin (Prenuptial/Postnuptial)", desc: "Pemisahan harta kekayaan antara suami dan istri demi keamanan finansial." },
        { title: "Akta Wasiat (Testamen)", desc: "Penyusunan pesanan terakhir terkait pembagian harta waris secara sah." },
        { title: "Akta Sewa Menyewa", desc: "Perjanjian otentik penggunaan properti atau barang berharga lainnya." },
        { title: "Akta Kuasa Mutlak / Jual Beli", desc: "Pembuatan surat kuasa yang tidak bisa dicabut sepihak, khusus untuk peralihan hak." }
      ]
    }
  ];

  return (
    <div>
      <SEO 
        title="Layanan" 
        description="Layanan Notaris dan PPAT Jember di Kantor Setyo Budhi Laksmana. Kami menyediakan pembuatan Akta Pendirian, AJB, Hibah, Legalisasi, dan lainnya."
      />
      {/* Header */}
      <div className="bg-slate-900 py-16 border-b-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Layanan Hukum Kami</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Sesuai dengan mandat Undang-Undang Jabatan Notaris (UUJN), kami menjamin produk hukum yang berkepastian.
          </p>
        </div>
      </div>

      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {allServices.map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Sidebar category header */}
                  <div className="bg-slate-100 md:w-1/3 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="mb-4">{section.icon}</div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900">{section.category}</h2>
                  </div>
                  {/* Items list */}
                  <div className="md:w-2/3 p-8">
                    <ul className="space-y-6">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                          <h3 className="text-lg font-bold text-amber-900 mb-2 flex items-center">
                            <PenTool className="w-4 h-4 mr-2 text-amber-600" />
                            {item.title}
                          </h3>
                          <p className="text-slate-600 pl-6 leading-relaxed">
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-amber-900 rounded-2xl p-8 text-center md:text-left md:flex items-center justify-between shadow-xl">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Butuh Layanan Kenotariatan Spesifik?</h3>
              <p className="text-amber-100/80 max-w-md">Tim kami siap membantu Anda menyusun draf akta dan mempersiapkan dokumen pendukung dengan seksama.</p>
            </div>
            <div>
               <a 
                href="https://wa.me/6282140490006" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-white text-amber-900 px-8 py-4 rounded-md font-bold hover:bg-slate-100 transition-colors shadow-sm"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
