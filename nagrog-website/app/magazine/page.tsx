import Link from 'next/link';
import { getAllItems } from '@/lib/content';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Horizons Magazine — Edisi Harian Indonesia 2026',
  description: 'AI Horizons: magazine harian AI dikurasi Nagrog Corp. Teknologi, bisnis, dan budaya dari sudut pandang kecerdasan buatan — edisi baru setiap hari.',
  alternates: { canonical: 'https://nagrog.com/magazine' },
  openGraph: {
    title: 'AI Horizons Magazine — Edisi Harian Indonesia 2026 | Nagrog Corp',
    description: 'Magazine harian dikurasi AI: teknologi, bisnis, dan budaya Indonesia.',
    url: 'https://nagrog.com/magazine',
    images: ['https://nagrog.com/og-image.png'],
  },
};

export default function MagazinePage() {
  const editions = getAllItems('magazine');

  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Magazine" />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          AI HORIZONS · DAILY EDITION
        </p>
        <h1 className="serif text-5xl md:text-8xl font-bold leading-none mb-4">Magazine</h1>
        <p className="serif text-xl text-muted mb-12 max-w-2xl">
          {editions.length} edisi · dikurasi setiap pagi oleh Magazine Creator AI · diterbitkan jam 07:00 WIB
        </p>

        {editions.length === 0 ? (
          <div className="border-2 border-dashed border-ink/30 p-12 text-center">
            <p className="serif text-2xl mb-2">Edisi belum dipublish.</p>
            <p className="mono text-xs uppercase tracking-widest text-muted">
              Magazine Creator akan auto-push edisi setiap hari jam 07:00 WIB
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-px bg-ink/20">
            {editions.map(e => (
              <Link
                key={e.slug}
                href={`/magazine/${e.slug}`}
                className="group block bg-paper p-8 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="flex items-center justify-between mb-6 mono text-[10px] uppercase tracking-widest text-muted group-hover:text-paper/60">
                  <span>EDISI #{e.edition || e.slug.replace(/\D/g, '') || '—'}</span>
                  <span>{e.date}</span>
                </div>
                <h2 className="serif text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:underline decoration-accent decoration-2 underline-offset-4">
                  {e.title}
                </h2>
                {e.excerpt && (
                  <p className="serif text-base text-muted group-hover:text-paper/80 leading-relaxed">
                    {e.excerpt}
                  </p>
                )}
                <div className="mt-6 mono text-xs uppercase tracking-widest text-accent">
                  Baca edisi →
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="bg-accent text-ink px-6 py-16 md:px-12">
        <div className="max-w-3xl">
          <h2 className="serif text-4xl md:text-5xl font-bold mb-4">
            Dapatkan setiap edisi via email.
          </h2>
          <p className="serif text-lg mb-6">
            Newsletter daily dari magazine, langsung ke inbox kamu setiap pagi.
          </p>
          <Link href="/newsletter" className="inline-block px-8 py-4 bg-ink text-paper mono text-xs uppercase tracking-widest border-2 border-ink hover:bg-paper hover:text-ink transition-colors">
            Subscribe Gratis →
          </Link>
        </div>
      </section>
    </main>
  );
}
