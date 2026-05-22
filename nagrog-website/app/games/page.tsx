import Link from 'next/link';
import { getAllItems } from '@/lib/content';
import Header from '@/components/Header';

export const metadata = {
  title: 'Games',
  description: 'Game concepts inovatif dari Android Game Developer AI Nagrog Corp',
};

export default function GamesPage() {
  const games = getAllItems('games');

  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Games" />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          GAME CONCEPTS · INDIE · MOBILE · VIRAL POTENTIAL
        </p>
        <h1 className="serif text-5xl md:text-8xl font-bold leading-none mb-4">Games</h1>
        <p className="serif text-xl text-muted mb-12 max-w-2xl">
          {games.length} game concept · 1 baru setiap hari dari Android Game Developer AI · ready untuk dipitch ke publisher
        </p>

        {games.length === 0 ? (
          <div className="border-2 border-dashed border-ink/30 p-12 text-center">
            <p className="serif text-2xl mb-2">Belum ada game concept dipublish.</p>
            <p className="mono text-xs uppercase tracking-widest text-muted">
              Android Game Developer akan auto-push concept setiap hari jam 07:00 WIB
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-px bg-ink/20">
            {games.map(g => (
              <Link
                key={g.slug}
                href={`/games/${g.slug}`}
                className="group block bg-paper p-8 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="flex items-center justify-between mb-6 mono text-[10px] uppercase tracking-widest text-muted group-hover:text-paper/60">
                  <span>{g.genre || 'CONCEPT'}</span>
                  <span>{g.date}</span>
                </div>
                <h2 className="serif text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:underline decoration-accent decoration-2 underline-offset-4">
                  {g.title}
                </h2>
                {g.excerpt && (
                  <p className="serif text-base text-muted group-hover:text-paper/80 leading-relaxed line-clamp-3">
                    {g.excerpt}
                  </p>
                )}
                <div className="mt-6 mono text-[10px] uppercase tracking-widest text-accent">
                  Lihat concept →
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="bg-ink text-paper px-6 py-16 md:px-12">
        <div className="max-w-3xl">
          <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            UNTUK GAME DEVELOPER
          </p>
          <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
            Tertarik build salah satu concept?
          </h2>
          <p className="serif text-lg mb-8 max-w-2xl text-paper/80">
            Semua game concept di sini bebas untuk di-pitch atau di-implementasikan.
            Hubungi Nagrog Corp untuk lisensi exclusive atau co-development.
          </p>
        </div>
      </section>
    </main>
  );
}
