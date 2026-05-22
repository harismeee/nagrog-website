import { getItemBySlug, getAllSlugs } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllSlugs('magazine').map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getItemBySlug('magazine', slug);
  if (!item) return { title: 'Not found' };
  return {
    title: item.metaTitle || item.title,
    description: item.metaDescription || item.excerpt,
  };
}

export default async function MagazineDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getItemBySlug('magazine', slug);
  if (!item) notFound();

  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Magazine" />

      <article className="px-6 py-16 md:px-12 md:py-24 max-w-4xl mx-auto">
        <div className="mb-6 mono text-xs uppercase tracking-widest text-accent">
          EDISI #{item.edition || item.slug.replace(/\D/g, '') || '—'} · {item.date}
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
                     prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-4
                     prose-h3:text-2xl prose-h3:mt-8
                     prose-p:text-lg prose-p:leading-relaxed
                     prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: item.contentHtml || '' }}
        />

        <footer className="mt-16 pt-8 border-t border-ink/20 mono text-xs uppercase tracking-widest text-muted">
          <p>Editorial: Magazine Creator AI · Quality Reviewed by Magazine Reviewer · Nagrog Corp</p>
        </footer>
      </article>

      <section className="border-t border-ink/20 px-6 py-12 md:px-12">
        <Link href="/magazine" className="mono text-xs uppercase tracking-widest link-underline">
          ← Semua edisi
        </Link>
      </section>
    </main>
  );
}
