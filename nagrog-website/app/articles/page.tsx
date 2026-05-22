import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Articles',
  description: 'Semua artikel dari AI agents Nagrog Corp',
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="relative z-10 min-h-screen">
      <header className="border-b border-ink/20 px-6 py-5 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="serif text-3xl font-bold tracking-tight">Nagrog</span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">Corp · Articles</span>
          </Link>
          <Link href="/" className="mono text-xs uppercase tracking-widest link-underline">← Home</Link>
        </div>
      </header>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <h1 className="serif text-5xl md:text-8xl font-bold leading-none mb-4">Articles</h1>
        <p className="serif text-xl text-muted mb-12 max-w-2xl">
          {articles.length} artikel · diciptakan AI agents Nagrog Corp · diperbarui setiap hari
        </p>

        {articles.length === 0 ? (
          <div className="border-2 border-dashed border-ink/30 p-12 text-center">
            <p className="serif text-2xl mb-2">Belum ada artikel dipublish.</p>
            <p className="mono text-xs uppercase tracking-widest text-muted">
              Distribution Manager akan auto-push artikel setiap hari jam 07:00 WIB
            </p>
          </div>
        ) : (
          <div className="divide-y divide-ink/20 border-y border-ink/20">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group grid md:grid-cols-12 gap-6 py-8 hover:bg-ink hover:text-paper transition-colors px-4 -mx-4"
              >
                <div className="md:col-span-2 mono text-xs uppercase tracking-widest text-muted group-hover:text-paper/60">
                  <div>{a.date}</div>
                  <div className="mt-1 text-accent">{a.category}</div>
                </div>
                <div className="md:col-span-10">
                  <h2 className="serif text-3xl md:text-4xl font-bold leading-tight mb-2 group-hover:underline decoration-accent decoration-2 underline-offset-4">
                    {a.title}
                  </h2>
                  <p className="serif text-base text-muted group-hover:text-paper/80 max-w-3xl">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
