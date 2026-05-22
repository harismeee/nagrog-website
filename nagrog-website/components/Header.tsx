import Link from 'next/link';

export default function Header({ subtitle }: { subtitle?: string }) {
  return (
    <header className="border-b border-ink/20 px-6 py-5 md:px-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="serif text-3xl font-bold tracking-tight">Nagrog</span>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {subtitle || 'Corp · Est. 2026'}
          </span>
        </Link>
        <nav className="flex items-center gap-6 mono text-xs uppercase tracking-widest flex-wrap">
          <Link href="/articles" className="link-underline">Articles</Link>
          <Link href="/magazine" className="link-underline">Magazine</Link>
          <Link href="/comics" className="link-underline">Comics</Link>
          <Link href="/games" className="link-underline">Games</Link>
          <Link href="/newsletter" className="link-underline">Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}
