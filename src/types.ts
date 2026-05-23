export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string; // Markdown content
  date: string;
  author: string;
  coverImage?: string;
  status?: 'draft' | 'published';
  tags?: string[];
}
