import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../api';
import { BlogPost as BlogPostType } from '../types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { SEO } from '../components/SEO';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug)
        .then(data => {
          setBlog(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Artikel tidak ditemukan.');
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div className="text-center py-32 min-h-screen bg-slate-50">Memuat artikel...</div>;
  if (error || !blog) return <div className="text-center py-32 min-h-screen bg-slate-50 text-red-500">{error}</div>;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title={blog.title} 
        description={blog.excerpt || blog.content.substring(0, 150) + "..."}
        ogImage={blog.coverImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.title,
          "image": blog.coverImage || "",
          "author": {
            "@type": "Person",
            "name": blog.author || "Setyo Budhi Laksmana, S.H., M.Kn."
          },
          "datePublished": blog.date
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-amber-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Indeks Artikel
        </Link>
        
        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {blog.coverImage && (
            <img 
              src={blog.coverImage} 
              alt={blog.title} 
              className="w-full h-[400px] object-cover"
            />
          )}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-slate-500 gap-x-6 gap-y-2 mb-10 pb-6 border-b border-slate-100">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-amber-600" />
                <span className="font-medium text-slate-700">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                {format(new Date(blog.date), 'EEEE, dd MMMM yyyy', { locale: id })}
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Tautan disalin!');
                }}
                className="flex items-center ml-auto hover:text-amber-700 transition-colors"
                title="Bagikan Artikel"
              >
                <Share2 className="w-4 h-4 mr-2" /> Bagikan
              </button>
            </div>
            
            <div className="markdown-body prose prose-lg prose-slate max-w-none font-sans leading-loose text-slate-700 w-full prose-headings:font-serif prose-a:text-amber-700 hover:prose-a:text-amber-800 focus:prose-a:outline-none focus:prose-a:ring-2 focus:prose-a:ring-amber-500 rounded-sm">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          </div>
          
          <div className="bg-slate-900 text-slate-100 p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h4 className="font-serif font-bold text-xl mb-2 text-white">Butuh kejelasan lebih lanjut?</h4>
              <p className="text-sm text-slate-400">Jadwalkan konsultasi gratis mengenai topik ini dengan Notaris kami.</p>
            </div>
            <a 
                href={`https://wa.me/6282140490006?text=Halo%20Notaris%20Setyo%20Budhi,%20saya%20ingin%20berkonsultasi%20terkait%20artikel:%20${blog.title}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold whitespace-nowrap transition-colors"
              >
                Konsultasi Sekarang
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
