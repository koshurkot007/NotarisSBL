import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

const DATA_FILE = path.join(process.cwd(), "blogs.json");

// Initialize blogs.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify([
      {
        id: "1",
        title: "Pentingnya Waarmerking Dokumen Perjanjian Bawah Tangan",
        slug: "pentingnya-waarmerking-dokumen-perjanjian",
        content: "Waarmerking adalah tindakan Notaris untuk mendaftarkan surat di bawah tangan dalam buku khusus. Meskipun tidak memberikan kekuatan pembuktian sempurna seperti Akta Otentik, waarmerking memastikan kepastian tanggal dokumen dan identitas para pihak yang bertanda tangan. Menurut UUJN, Notaris berwenang melakukan hal tersebut guna memberikan perlindungan hukum tambahan bagi masyarakat yang memilih membuat perjanjian di bawah tangan.",
        date: "2023-11-20T10:00:00.000Z",
        author: "Setyo Budhi Laksmana, S.H., M.Kn."
      },
      {
        id: "2",
        title: "Apa Saja Syarat Mendirikan PT (Perseroan Terbatas)?",
        slug: "syarat-mendirikan-pt",
        content: "Mendirikan Perseroan Terbatas di Indonesia kini semakin mudah, terutama sejak adanya UU Cipta Kerja. Syarat utamanya meliputi: 1. Fotokopi KTP dan NPWP para pendiri dan pengurus, 2. Nama PT (minimal 3 kata), 3. Domisili yang jelas (surat keterangan dari kelurahan jika perlu), 4. Besaran modal dasar, ditempatkan, dan disetor. Melalui notaris, akta pendirian dapat dibuat dan disahkan oleh Kementerian Hukum dan HAM secara online.",
        date: "2023-12-05T14:30:00.000Z",
        author: "Setyo Budhi Laksmana, S.H., M.Kn."
      }
    ], null, 2)
  );
}

const getBlogs = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
const saveBlogs = (data: any) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// --- API ROUTES ---
app.get("/api/blogs", (req, res) => {
  try {
    const blogs = getBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to read blogs" });
  }
});

app.get("/api/blogs/:slug", (req, res) => {
  try {
    const blogs = getBlogs();
    const blog = blogs.find((b: any) => b.slug === req.params.slug);
    if (blog) res.json(blog);
    else res.status(404).json({ error: "Blog not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to read blog" });
  }
});

app.post("/api/blogs", (req, res) => {
  try {
    const blogs = getBlogs();
    const newBlog = {
      id: Date.now().toString(),
      ...req.body,
      date: new Date().toISOString(),
      author: "Setyo Budhi Laksmana, S.H., M.Kn."
    };
    blogs.push(newBlog);
    saveBlogs(blogs);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to create blog" });
  }
});

app.put("/api/blogs/:id", (req, res) => {
  try {
    const blogs = getBlogs();
    const index = blogs.findIndex((b: any) => b.id === req.params.id);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...req.body };
      saveBlogs(blogs);
      res.json(blogs[index]);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog" });
  }
});

app.delete("/api/blogs/:id", (req, res) => {
  try {
    const blogs = getBlogs();
    const newBlogs = blogs.filter((b: any) => b.id !== req.params.id);
    saveBlogs(newBlogs);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});


// --- VITE MIDDLEWARE ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://HOST:${PORT}`);
  });
}

startServer();
