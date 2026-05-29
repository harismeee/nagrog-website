import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { getAllItems } from '@/lib/content';

const baseUrl = 'https://nagrog.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const comics = getAllItems('comics');
  const games = getAllItems('games');
  const magazine = getAllItems('magazine');

  const articleEntries: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const comicEntries: MetadataRoute.Sitemap = comics.map(item => ({
    url: `${baseUrl}/comics/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const gameEntries: MetadataRoute.Sitemap = games.map(item => ({
    url: `${baseUrl}/games/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const magazineEntries: MetadataRoute.Sitemap = magazine.map(item => ({
    url: `${baseUrl}/magazine/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/magazine`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/comics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/manifesto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/transparency`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...articleEntries,
    ...comicEntries,
    ...gameEntries,
    ...magazineEntries,
  ];
}
