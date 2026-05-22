import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentRoot = path.join(process.cwd(), 'content');

export interface ContentFrontmatter {
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  author?: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  readTime?: string;
  approved?: boolean;
  // Comic specific
  panels?: number;
  genre?: string;
  // Magazine specific
  edition?: number | string;
}

export interface ContentItem extends ContentFrontmatter {
  slug: string;
  contentHtml?: string;
  contentRaw?: string;
}

function getDir(type: 'articles' | 'comics' | 'magazine' | 'games') {
  return path.join(contentRoot, type);
}

export function getAllSlugs(type: 'articles' | 'comics' | 'magazine' | 'games'): string[] {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export function getAllItems(type: 'articles' | 'comics' | 'magazine' | 'games'): ContentItem[] {
  const dir = getDir(type);
  if (!fs.existsSync(dir)) return [];
  const slugs = getAllSlugs(type);
  return slugs
    .map(slug => {
      const fullPath = path.join(dir, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        ...(data as ContentFrontmatter),
        contentRaw: content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getItemBySlug(
  type: 'articles' | 'comics' | 'magazine' | 'games',
  slug: string
): Promise<ContentItem | null> {
  const fullPath = path.join(getDir(type), `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    ...(data as ContentFrontmatter),
    contentHtml: processed.toString(),
    contentRaw: content,
  };
}
