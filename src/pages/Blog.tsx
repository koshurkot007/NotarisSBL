import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../api';
import { BlogPost as BlogPostType } from '../types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Calendar, User, ChevronRight, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Blog() {
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getBlogs()
      .then(data => {
        // Sort newest first
        setBlogs(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setLoading(false);
      })
      .catch(err => {
        setError('Gagal memuat artikel.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Artikel & Edukasi Hukum" 
        description="Temukan wawasan terbaru mengenai hukum properti, keluarga, bisnis, dan ulasan UU Kenotariatan oleh Setyo Budhi Laksmana, Notaris Jember."
      />
      <div className="bg-slate-900 py-16 border-b-4 border-amber-700 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Artikel & Edukasi Hukum</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Wawasan seputar hukum properti, keluarga, dan bisnis untuk membekali Anda dengan pengetahuan esensial.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center py-20 text-slate-500">Memuat artikel...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">{error}</div>
        ) : blogs.filter(b => b.status === 'published' || !b.status).length === 0 ? (
          <div className="text-center py-20 text-slate-500">Belum ada artikel saat ini.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.filter(b => b.status === 'published' || !b.status).map(blog => (
              <article key={blog.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
                <Link to={`/blog/${blog.slug}`} className="block overflow-hidden relative">
                  {blog.coverImage ? (
                    <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-48 bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-500">
                      <BookOpen className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-900 border border-amber-900/10">
                    Artikel
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col space-y-4">
                  <h2 className="text-xl font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed flex-grow">
                    {blog.excerpt || blog.content}
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-auto">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {format(new Date(blog.date), 'dd MMM yyyy', { locale: id })}
                    </div>
                    <Link to={`/blog/${blog.slug}`} className="flex items-center text-amber-700 font-semibold group-hover:translate-x-1 transition-transform">
                      Baca <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
