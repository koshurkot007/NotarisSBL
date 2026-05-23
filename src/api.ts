import { BlogPost } from "./types";

const API_BASE = '/api/blogs';

export const getBlogs = async (): Promise<BlogPost[]> => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost> => {
  const res = await fetch(`${API_BASE}/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

export const createBlog = async (blog: Partial<BlogPost>): Promise<BlogPost> => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog)
  });
  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};

export const updateBlog = async (id: string, blog: Partial<BlogPost>): Promise<BlogPost> => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog)
  });
  if (!res.ok) throw new Error("Failed to update blog");
  return res.json();
};

export const deleteBlog = async (id: string): Promise<void> => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error("Failed to delete blog");
};
