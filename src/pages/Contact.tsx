import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  const WA_NUMBER = "6282140490006";

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Kontak Kami" 
        description="Hubungi Kantor Notaris & PPAT Setyo Budhi Laksmana, S.H., M.Kn. di Jember untuk konsultasi dan pelayanan hukum kenotariatan."
      />
      
      {/* Header */}
      <div className="bg-slate-900 py-16 border-b-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Hubungi Kami</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Kami siap mendengarkan kebutuhan hukum Anda dan memberikan solusi yang tepat serta berkepastian hukum.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Informasi Kontak</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start">
              <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Alamat Kantor</h3>
                <p className="text-slate-600 leading-relaxed">
                  Jl. Jendral Achmad Yani No. 134<br />
                  Kepatihan, Kaliwates<br />
                  Kabupaten Jember, Jawa Timur 68137
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start">
              <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                <Phone className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Telepon & WhatsApp</h3>
                <p className="text-slate-600 mb-4">0821 4049 0006</p>
                <a 
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold bg-green-500 text-white px-5 py-2.5 rounded-md hover:bg-green-600 transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Konsultasi Via WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start">
              <div className="bg-amber-50 p-3 rounded-lg mr-4 mt-1">
                <Mail className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">setyobudhi888@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start">
              <div className="bg-slate-100 p-3 rounded-lg mr-4 mt-1">
                <Clock className="w-6 h-6 text-slate-700" />
              </div>
              <div className="w-full">
                <h3 className="font-bold text-slate-900 mb-3">Jam Operasional</h3>
                <ul className="space-y-2 text-sm text-slate-600 w-full">
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Senin - Jumat</span>
                    <span className="font-medium text-slate-900">08:00 - 16:00 WIB</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 py-2">
                    <span>Sabtu - Minggu</span>
                    <span className="font-medium text-amber-700">Tutup</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Hari Libur Nasional</span>
                    <span className="font-medium text-amber-700">Tutup</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center flex-wrap gap-4">
               <div>
                 <h2 className="text-xl font-serif font-bold text-slate-900">Lokasi Google Maps</h2>
                 <p className="text-sm text-slate-500 mt-1">Kantor Notaris & PPAT Jember</p>
               </div>
               <a 
                 href="https://maps.app.goo.gl/3VmLpdXKTW3iSpNc7" 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-sm font-medium bg-slate-100 px-4 py-2 rounded-md text-amber-700 hover:text-amber-800 hover:bg-slate-200 transition-colors whitespace-nowrap"
               >
                 Buka di Google Maps &rarr;
               </a>
            </div>
            <div className="flex-grow w-full bg-slate-100 relative">
               <iframe 
                src="https://maps.google.com/maps?q=Jl.%20Jendral%20Achmad%20Yani%20No.%20134,%20Kepatihan,%20Kaliwates,%20Jember&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kantor Notaris"
                className="absolute inset-0 z-10"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
