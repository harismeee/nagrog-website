import { getItemBySlug, getAllSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllSlugs('comics').map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getItemBySlug('comics', slug);
  if (!item) return { title: 'Not found' };
  return {
    title: item.metaTitle || item.title,
    description: item.metaDescription || item.excerpt,
  };
}

export default async function ComicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getItemBySlug('comics', slug);
  if (!item) notFound();

  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Comics" />

      <article className="px-6 py-16 md:px-12 md:py-24 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center gap-4 mono text-xs uppercase tracking-widest">
          <span className="text-accent">{item.genre || 'COMIC'}</span>
          <span className="text-muted">{item.date}</span>
          {item.panels && <span className="text-muted">· {item.panels} panel</span>}
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
                     prose-strong:text-accent prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: item.contentHtml || '' }}
        />

        <footer className="mt-16 pt-8 border-t border-ink/20 mono text-xs uppercase tracking-widest text-muted">
          <p>Script: Comic Creator AI · Reviewed by Comic Reviewer · Nagrog Corp</p>
        </footer>
      </article>

      <section className="border-t border-ink/20 px-6 py-12 md:px-12">
        <Link href="/comics" className="mono text-xs uppercase tracking-widest link-underline">
          ← Semua komik
        </Link>
      </section>
    </main>
  );
}
