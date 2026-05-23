import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Artikel & Edukasi', path: '/blog' },
    { name: 'Kontak', path: '/contact' },
  ];

  const WA_NUMBER = "6282140490006";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar - Contact Info */}
      <div className="bg-slate-900 text-slate-300 py-2 text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Jl. Jendral Achmad Yani No. 134, Jember</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> setyobudhi888@gmail.com</span>
          </div>
          <div>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 0821 4049 0006</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Scale className="h-8 w-8 text-amber-700" />
                <span className="ml-3 text-xl font-serif font-bold text-slate-900">
                  Notaris Setyo Budhi L.
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-amber-700 font-semibold'
                      : 'text-slate-600 hover:text-amber-700'
                  } transition-colors px-3 py-2 text-sm font-medium`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-700 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-amber-800 transition-colors"
                style={{ textDecoration: 'none' }}
              >
                Konsultasi
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-500 hover:text-slate-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'bg-amber-50 text-amber-800'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center mt-4 bg-amber-700 text-white px-5 py-3 rounded-md text-base font-medium hover:bg-amber-800"
                style={{ textDecoration: 'none' }}
              >
                Konsultasi Sekarang
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WA Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all z-50 flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-amber-600" />
              <span className="ml-2 text-lg font-serif font-bold text-white">Notaris & PPAT</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Setyo Budhi Laksmana, S.H., M.Kn.<br/>
              SK: AHU-01017.AH.02.01.TAHUN 2023<br/>
              Melayani kebutuhan hukum, kenotariatan dan pertanahan secara profesional dan komprehensif.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Kontak Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-slate-500 mt-1 flex-shrink-0" />
                <span>Jl. Jendral Achmad Yani No. 134, Kepatihan, Kaliwates, Jember, Jawa Timur 68137</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-slate-500 flex-shrink-0" />
                <span>0821 4049 0006</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-slate-500 flex-shrink-0" />
                <span>setyobudhi888@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Jam Operasional</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Senin - Jumat</span>
                <span className="text-white">08:00 - 16:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2 pt-2">
                <span>Sabtu - Minggu</span>
                <span className="text-amber-500">Tutup</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Hari Libur Nasional</span>
                <span className="text-amber-500">Tutup</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Kantor Notaris Setyo Budhi Laksmana, S.H., M.Kn. All rights reserved. Jember, Indonesia.
        </div>
      </footer>
    </div>
  );
}
