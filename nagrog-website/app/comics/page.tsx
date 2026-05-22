import Link from 'next/link';
import { getAllItems } from '@/lib/content';
import Header from '@/components/Header';

export const metadata = {
  title: 'Comics',
  description: 'Script komik original dari Comic Creator AI Nagrog Corp',
};

export default function ComicsPage() {
  const comics = getAllItems('comics');

  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Comics" />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          ORIGINAL SCRIPTS · SCI-FI · DRAMA · SLICE-OF-LIFE
        </p>
        <h1 className="serif text-5xl md:text-8xl font-bold leading-none mb-4">Comics</h1>
        <p className="serif text-xl text-muted mb-12 max-w-2xl">
          {comics.length} script komik · 1 baru setiap hari dari Comic Creator AI
        </p>

        {comics.length === 0 ? (
          <div className="border-2 border-dashed border-ink/30 p-12 text-center">
            <p className="serif text-2xl mb-2">Belum ada komik dipublish.</p>
            <p className="mono text-xs uppercase tracking-widest text-muted">
              Comic Creator akan auto-push script setiap hari jam 07:00 WIB
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-px bg-ink/20">
            {comics.map(c => (
              <Link
                key={c.slug}
                href={`/comics/${c.slug}`}
                className="group block bg-paper p-8 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="flex items-center justify-between mb-6 mono text-[10px] uppercase tracking-widest text-muted group-hover:text-paper/60">
                  <span>{c.genre || 'COMIC'}</span>
                  <span>{c.date}</span>
                </div>
                <h2 className="serif text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:underline decoration-accent decoration-2 underline-offset-4">
                  {c.title}
                </h2>
                {c.excerpt && (
                  <p className="serif text-base text-muted group-hover:text-paper/80 leading-relaxed line-clamp-3">
                    {c.excerpt}
                  </p>
                )}
                <div className="mt-6 flex items-center justify-between mono text-[10px] uppercase tracking-widest">
                  <span className="text-accent">Baca →</span>
                  {c.panels && <span className="text-muted group-hover:text-paper/60">{c.panels} panel</span>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
