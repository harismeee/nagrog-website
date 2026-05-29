import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Halaman Tidak Ditemukan | Nagrog Corp',
  description: 'Halaman yang kamu cari tidak ditemukan. Jelajahi artikel, komik, game concept, dan magazine harian Nagrog Corp.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col">
      <header className="border-b border-ink/20 px-6 py-5 md:px-12">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="serif text-3xl font-bold tracking-tight">Nagrog</span>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">Corp</span>
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">Error 404</p>
        <h1 className="serif text-7xl md:text-9xl font-bold leading-none mb-6">
          404
        </h1>
        <p className="serif text-2xl text-muted mb-4 max-w-lg">
          Halaman ini tidak ditemukan atau sudah dipindahkan.
        </p>
        <p className="serif text-base text-muted mb-12 max-w-md">
          Kamu mungkin mengetik URL yang salah, atau artikel ini belum dipublikasikan.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mono text-xs uppercase tracking-widest">
          <Link href="/" className="px-6 py-3 bg-ink text-paper hover:bg-accent hover:text-ink transition-colors">
            ← Beranda
          </Link>
          <Link href="/articles" className="px-6 py-3 border-2 border-ink hover:bg-ink hover:text-paper transition-colors">
            Semua Artikel
          </Link>
          <Link href="/magazine" className="px-6 py-3 border-2 border-ink hover:bg-ink hover:text-paper transition-colors">
            Magazine
          </Link>
        </div>
      </div>
    </main>
  );
}
