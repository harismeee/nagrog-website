import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ArticleFrontmatter {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author?: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  readTime?: string;
  approved?: boolean;
  affiliateDisclosure?: boolean;
  tags?: string[];
  score?: number;
  faq?: FaqItem[];
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  contentHtml?: string;
  contentRaw?: string;
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs.readdirSync(articlesDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  const slugs = getAllArticleSlugs();
  return slugs
    .map(slug => {
      const fullPath = path.join(articlesDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        ...(data as ArticleFrontmatter),
        contentRaw: content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    ...(data as ArticleFrontmatter),
    contentHtml: processed.toString(),
    contentRaw: content,
  };
}
