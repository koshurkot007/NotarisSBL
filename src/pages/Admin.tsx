import React, { useState, useEffect } from 'react';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../api';
import { BlogPost as BlogPostType } from '../types';
import slugify from 'slugify';
import { Settings, Plus, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Partial<BlogPostType>>({});
  const [message, setMessage] = useState('');

  const ADMIN_PASSWORD = "notarisjember"; // Hardcoded for preview demo purposes.

  const loadBlogs = () => {
    setLoading(true);
    getBlogs()
      .then(data => {
        setBlogs(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (isAuthenticated) loadBlogs();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Password salah.");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentBlog.title || !currentBlog.content) return;

    try {
      if (isEditing && currentBlog.id) {
        await updateBlog(currentBlog.id, currentBlog);
        setMessage("Artikel berhasil diperbarui.");
      } else {
        const slug = slugify(currentBlog.title, { lower: true, strict: true });
        await createBlog({ ...currentBlog, slug });
        setMessage("Artikel baru berhasil diterbitkan.");
      }
      setIsEditing(false);
      setCurrentBlog({});
      loadBlogs();
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage("Gagal menyimpan artikel.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Yakin ingin menghapus artikel ini?")) {
      try {
        await deleteBlog(id);
        setMessage("Artikel dihapus.");
        loadBlogs();
        setTimeout(() => setMessage(''), 3000);
      } catch (err) {
        setMessage("Gagal menghapus.");
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <Settings className="w-12 h-12 text-slate-800" />
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-6 font-serif">Admin Portal</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="Masukkan password admin"
                required
              />
              <p className="text-xs text-slate-500 mt-2">Hint: notarisjember</p>
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition-colors font-medium">
              Masuk
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900">Manajemen Konten</h1>
        <button 
          onClick={() => { setIsEditing(true); setCurrentBlog({}); }}
          className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md font-medium flex items-center transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Tulis Artikel Baru
        </button>
      </div>

      {message && (
        <div className="bg-green-50 text-green-800 p-4 rounded-md mb-8 flex items-center border border-green-200">
          <CheckCircle className="w-5 h-5 mr-2" /> {message}
        </div>
      )}

      {isEditing ? (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 mb-12">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <h2 className="text-xl font-bold">{currentBlog.id ? 'Edit Artikel' : 'Tulis Artikel Baru'}</h2>
            <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600">
              <XCircle className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Judul Artikel</label>
                <input 
                  type="text" 
                  value={currentBlog.title || ''}
                  onChange={(e) => setCurrentBlog({...currentBlog, title: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">URL Cover Image</label>
                <input 
                  type="text" 
                  value={currentBlog.coverImage || ''}
                  onChange={(e) => setCurrentBlog({...currentBlog, coverImage: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 font-mono text-sm"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Ringkasan (Excerpt)</label>
                <textarea 
                  value={currentBlog.excerpt || ''}
                  onChange={(e) => setCurrentBlog({...currentBlog, excerpt: e.target.value})}
                  rows={2}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status Publikasi</label>
                <select
                  value={currentBlog.status || 'draft'}
                  onChange={(e) => setCurrentBlog({...currentBlog, status: e.target.value as 'draft' | 'published'})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 bg-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Dipublikasikan</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Isi Artikel (Markdown Supported)</label>
              <textarea 
                value={currentBlog.content || ''}
                onChange={(e) => setCurrentBlog({...currentBlog, content: e.target.value})}
                rows={15}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-amber-500 focus:border-amber-500 font-mono text-sm"
                required
                placeholder="Gunakan format Markdown untuk struktur artikel (misal: ## Heading, **bold**)..."
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 font-medium">
                Batal
              </button>
              <button type="submit" className="px-6 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 font-medium">
                Simpan
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Judul</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tanggal</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {loading ? (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-500">Memuat data...</td></tr>
                ) : blogs.length === 0 ? (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-500">Belum ada artikel.</td></tr>
                ) : blogs.map(blog => (
                  <tr key={blog.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-slate-900 truncate max-w-md">{blog.title}</div>
                      <div className="text-sm text-slate-500 truncate mt-1">/{blog.slug}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'}`}>
                        {blog.status === 'published' ? 'Dipublikasikan' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {new Date(blog.date).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                      <button 
                        onClick={() => { setIsEditing(true); setCurrentBlog(blog); }}
                        className="text-indigo-600 hover:text-indigo-900 inline-flex items-center"
                      >
                        <Edit2 className="w-4 h-4 mr-1"/> Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 hover:text-red-900 inline-flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1"/> Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
