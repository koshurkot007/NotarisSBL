import { BlogPost } from "./types";

const INITIAL_BLOGS: BlogPost[] = [
  {
    id: "1",
    title: "Pentingnya Waarmerking Dokumen Perjanjian Bawah Tangan",
    slug: "pentingnya-waarmerking-dokumen-perjanjian",
    content: "Waarmerking adalah tindakan Notaris untuk mendaftarkan surat di bawah tangan dalam buku khusus. Meskipun tidak memberikan kekuatan pembuktian sempurna seperti Akta Otentik, waarmerking memastikan kepastian tanggal dokumen dan identitas para pihak yang bertanda tangan. Menurut UUJN, Notaris berwenang melakukan hal tersebut guna memberikan perlindungan hukum tambahan bagi masyarakat yang memilih membuat perjanjian di bawah tangan.",
    date: "2023-11-20T10:00:00.000Z",
    author: "Setyo Budhi Laksmana, S.H., M.Kn.",
    status: "published"
  },
  {
    id: "2",
    title: "Apa Saja Syarat Mendirikan PT (Perseroan Terbatas)?",
    slug: "syarat-mendirikan-pt",
    content: "Mendirikan Perseroan Terbatas di Indonesia kini semakin mudah, terutama sejak adanya UU Cipta Kerja. Syarat utamanya meliputi: 1. Fotokopi KTP dan NPWP para pendiri dan pengurus, 2. Nama PT (minimal 3 kata), 3. Domisili yang jelas (surat keterangan dari kelurahan jika perlu), 4. Besaran modal dasar, ditempatkan, dan disetor. Melalui notaris, akta pendirian dapat dibuat dan disahkan oleh Kementerian Hukum dan HAM secara online.",
    date: "2023-12-05T14:30:00.000Z",
    author: "Setyo Budhi Laksmana, S.H., M.Kn.",
    status: "published"
  }
];

const getLocalBlogs = (): BlogPost[] => {
  try {
    const stored = localStorage.getItem('sbl_blogs');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    // Ignore
  }
  return INITIAL_BLOGS;
};

const saveLocalBlogs = (blogs: BlogPost[]) => {
  try {
    localStorage.setItem('sbl_blogs', JSON.stringify(blogs));
  } catch (e) {
    // Ignore
  }
};

export const getBlogs = async (): Promise<BlogPost[]> => {
  return Promise.resolve(getLocalBlogs());
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost> => {
  const blogs = getLocalBlogs();
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) throw new Error("Failed to fetch blog");
  return Promise.resolve(blog);
};

export const createBlog = async (blog: Partial<BlogPost>): Promise<BlogPost> => {
  const blogs = getLocalBlogs();
  const newBlog = {
    id: Date.now().toString(),
    ...blog,
    date: new Date().toISOString(),
    author: "Setyo Budhi Laksmana, S.H., M.Kn."
  } as BlogPost;
  
  saveLocalBlogs([...blogs, newBlog]);
  return Promise.resolve(newBlog);
};

export const updateBlog = async (id: string, blog: Partial<BlogPost>): Promise<BlogPost> => {
  const blogs = getLocalBlogs();
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) throw new Error("Failed to update blog");
  
  const updated = { ...blogs[index], ...blog };
  blogs[index] = updated;
  saveLocalBlogs(blogs);
  return Promise.resolve(updated);
};

export const deleteBlog = async (id: string): Promise<void> => {
  const blogs = getLocalBlogs();
  saveLocalBlogs(blogs.filter(b => b.id !== id));
  return Promise.resolve();
};
