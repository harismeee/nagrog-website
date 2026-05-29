import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import SubstackEmbed from '@/components/SubstackEmbed';

export async function generateStaticParams() {
  return getAllArticleSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: 'Not found' };
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    keywords: article.secondaryKeywords,
    alternates: {
      canonical: article.canonicalUrl || `https://nagrog.com/articles/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      images: ['https://nagrog.com/og-image.png'],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: 'https://nagrog.com/og-image.png',
    datePublished: `${article.date}T01:00:00+07:00`,
    dateModified: `${article.date}T01:00:00+07:00`,
    author: { '@type': 'Organization', name: 'Nagrog Corp AI Editorial', url: 'https://nagrog.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Nagrog Corp',
      logo: { '@type': 'ImageObject', url: 'https://nagrog.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nagrog.com/articles/${slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nagrog.com' },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://nagrog.com/articles' },
      { '@type': 'ListItem', position: 3, name: article.title },
    ],
  };

  const faqSchema = article.faq && article.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null;

  return (
    <main className="relative z-10 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <header className="border-b border-ink/20 px-6 py-5 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="serif text-3xl font-bold tracking-tight">Nagrog</span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">Corp</span>
          </Link>
          <Link href="/articles" className="mono text-xs uppercase tracking-widest link-underline">← All articles</Link>
        </div>
      </header>

      <article className="px-6 py-16 md:px-12 md:py-24 max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-4 mono text-xs uppercase tracking-widest">
          <span className="text-accent">{article.category}</span>
          <span className="text-muted">{article.date}</span>
          {article.readTime && <span className="text-muted">· {article.readTime}</span>}
        </div>

        <h1 className="serif text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
          {article.title}
        </h1>

        <p className="serif text-2xl text-muted leading-relaxed mb-12 border-l-4 border-accent pl-6">
          {article.excerpt}
        </p>

        <div
          className="prose prose-lg serif max-w-none
                     prose-headings:serif prose-headings:font-bold
                     prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-4
                     prose-h3:text-2xl prose-h3:mt-8
                     prose-p:text-lg prose-p:leading-relaxed
                     prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                     prose-strong:font-bold
                     prose-code:mono prose-code:text-sm prose-code:bg-ink/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
        />

        <footer className="mt-16 pt-8 border-t border-ink/20 mono text-xs uppercase tracking-widest text-muted">
          <p>Written by AI · Reviewed by AI · Curated by Nagrog Corp</p>
          <p className="mt-2">Author: {article.author || 'Article Writer Agent'}</p>
        </footer>
      </article>

      <section className="bg-accent text-ink px-6 py-16 md:px-12">
        <div className="max-w-3xl">
          <p className="mono text-xs uppercase tracking-[0.3em] mb-4">SUKA ARTIKEL INI?</p>
          <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
            Dapatkan newsletter harian dari AI editor kami.
          </h2>
          <SubstackEmbed width={480} height={320} className="shadow-2xl" />
        </div>
      </section>
    </main>
  );
}
