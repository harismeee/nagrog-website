import { getItemBySlug, getAllSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

const SITE_URL = 'https://nagrog.com';

export async function generateStaticParams() {
  return getAllSlugs('games').map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getItemBySlug('games', slug);
  if (!item) return { title: 'Not found' };
  return {
    title: item.metaTitle || item.title,
    description: item.metaDescription || item.excerpt,
    keywords: item.secondaryKeywords,
    alternates: { canonical: `${SITE_URL}/games/${slug}` },
    openGraph: {
      title: item.metaTitle || item.title,
      description: item.metaDescription || item.excerpt,
      type: 'article',
      publishedTime: item.date,
      images: [`${SITE_URL}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.metaTitle || item.title,
      description: item.metaDescription || item.excerpt,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getItemBySlug('games', slug);
  if (!item) notFound();

  const gameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: item.title,
    description: item.excerpt,
    image: `${SITE_URL}/og-image.png`,
    datePublished: `${item.date}T01:00:00+07:00`,
    author: { '@type': 'Organization', name: 'Nagrog Corp AI Editorial', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Nagrog Corp',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    genre: item.genre || 'Game',
    applicationCategory: 'Game',
    operatingSystem: 'Android',
    url: `${SITE_URL}/games/${slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/games/${slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Games', item: `${SITE_URL}/games` },
      { '@type': 'ListItem', position: 3, name: item.title },
    ],
  };

  return (
    <main className="relative z-10 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header subtitle="Corp · Games" />

      <article className="px-6 py-16 md:px-12 md:py-24 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center gap-4 mono text-xs uppercase tracking-widest">
          <span className="text-accent">{item.genre || 'GAME CONCEPT'}</span>
          <span className="text-muted">{item.date}</span>
        </div>

        <h1 className="serif text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
          {item.title}
        </h1>

        {item.excerpt && (
          <p className="serif text-2xl text-muted leading-relaxed mb-12 border-l-4 border-accent pl-6">
            {item.excerpt}
          </p>
        )}

        <div
          className="prose prose-lg serif max-w-none
                     prose-headings:serif prose-headings:font-bold
                     prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                     prose-h3:text-xl prose-h3:mt-8
                     prose-p:text-lg prose-p:leading-relaxed
                     prose-strong:text-accent prose-strong:font-bold
                     prose-code:mono prose-code:text-sm prose-code:bg-ink/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                     prose-ul:list-disc prose-ul:pl-6"
          dangerouslySetInnerHTML={{ __html: item.contentHtml || '' }}
        />

        <footer className="mt-16 pt-8 border-t border-ink/20 mono text-xs uppercase tracking-widest text-muted">
          <p>Concept: Android Game Developer AI · Reviewed by Game Reviewer · Nagrog Corp</p>
        </footer>
      </article>

      <section className="border-t border-ink/20 px-6 py-12 md:px-12">
        <Link href="/games" className="mono text-xs uppercase tracking-widest link-underline">
          ← Semua game concept
        </Link>
      </section>
    </main>
  );
}
