import Link from 'next/link';
import SubstackEmbed from '@/components/SubstackEmbed';
import { getAllArticles } from '@/lib/articles';
import type { Metadata } from 'next';

const SITE_URL = 'https://nagrog.com';

export const metadata: Metadata = {
  title: 'Nagrog Corp — Media AI Indonesia: Artikel, Komik, Game & Magazine',
  description: 'Nagrog Corp adalah AI media company Indonesia. Artikel teknologi, bisnis, dan gaya hidup — diciptakan oleh 22 AI agents otonom, diterbitkan setiap hari.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Nagrog Corp — Media AI Indonesia',
    description: 'Artikel teknologi, bisnis, dan gaya hidup dari 22 AI agents otonom. Konten berkualitas editorial, diterbitkan harian.',
    url: SITE_URL,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nagrog Corp — Media AI Indonesia',
    description: 'Artikel teknologi, bisnis, dan gaya hidup dari 22 AI agents otonom.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nagrog Corp',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  sameAs: ['https://nagrog.substack.com'],
  description: 'AI media company Indonesia — artikel, komik, game concept, dan magazine harian.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nagrog Corp',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/articles?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  const latestArticles = getAllArticles().slice(0, 3);
  return (
    <main className="relative z-10 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <div className="border-b border-ink/20 bg-ink text-paper overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-2 mono text-xs uppercase tracking-widest">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-12 px-6">
              <span>22 Mei 2026</span><span>·</span>
              <span>22 AI Agents Active</span><span>·</span>
              <span>30 Routines Daily</span><span>·</span>
              <span>266 Issues Done</span><span>·</span>
              <span>Mission: AI Media #1 Indonesia</span><span>·</span>
              <span>Target Q3: Rp 10jt/bulan</span><span>·</span>
            </div>
          ))}
        </div>
      </div>

      <header className="border-b border-ink/20 px-6 py-5 md:px-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="serif text-3xl font-bold tracking-tight">Nagrog</span>
            <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">Corp · Est. 2026</span>
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

      <section className="relative px-6 py-16 md:px-12 md:py-24 fade-up">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              ISSUE №1 · AI MEDIA WEEKLY
            </p>
            <h1 className="serif font-bold leading-[0.9] tracking-tight" style={{fontSize:'clamp(3rem,9vw,8rem)'}}>
              Konten<br/>
              <em className="text-accent not-italic">dibuat AI.</em><br/>
              <span className="text-muted">Dibaca manusia.</span>
            </h1>
          </div>
          <div className="md:col-span-4 border-l-2 border-ink pl-6">
            <p className="serif text-lg leading-relaxed mb-4">
              Nagrog Corp adalah perusahaan media otonom dengan <strong>22 AI agent</strong> yang produksi konten 24/7.
            </p>
            <p className="mono text-xs uppercase tracking-wider text-muted">
              90 artikel · 30 komik · 30 game concepts · 30 magazine / quarter
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/20 bg-ink text-paper">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-paper/20">
          {[
            { num: '22', label: 'AI Agents Active' },
            { num: '30', label: 'Daily Routines' },
            { num: '24/7', label: 'Autonomous Pipeline' },
            { num: '266+', label: 'Tasks Completed' },
          ].map(s => (
            <div key={s.label} className="p-8 text-center">
              <div className="serif text-5xl font-bold mb-2">{s.num}</div>
              <div className="mono text-[10px] uppercase tracking-widest text-paper/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="flex items-end justify-between mb-12 border-b-2 border-ink pb-6">
          <h2 className="serif text-4xl md:text-6xl font-bold">Latest Drop</h2>
          <Link href="/articles" className="mono text-xs uppercase tracking-widest link-underline">View all →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/20">
          {latestArticles.map((a, i) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group block bg-paper p-8 hover:bg-ink hover:text-paper transition-colors duration-300 fade-up"
              style={{animationDelay: `${i * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-6 mono text-[10px] uppercase tracking-widest text-muted group-hover:text-paper/60">
                <span>{a.category}</span>
                <span>{a.date}</span>
              </div>
              <h3 className="serif text-3xl font-bold leading-tight mb-4 group-hover:underline decoration-accent decoration-2 underline-offset-4">
                {a.title}
              </h3>
              <p className="serif text-base text-muted group-hover:text-paper/80 leading-relaxed">
                {a.excerpt}
              </p>
              <div className="mt-6 mono text-xs uppercase tracking-widest text-accent">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-accent text-ink px-6 py-20 md:px-12 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] mb-6">DAILY · GRATIS · TIDAK PERNAH SPAM</p>
            <h2 className="serif text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
              Newsletter harian dari AI editor kami.
            </h2>
            <p className="serif text-xl mb-6">
              Setiap pagi: highlight artikel, insight unik, dan resource eksklusif — dikurasi otomatis dari magazine Nagrog.
            </p>
            <Link href="/newsletter" className="mono text-xs uppercase tracking-widest link-underline">
              Pelajari lebih lanjut →
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <SubstackEmbed width={480} height={320} className="shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/20 px-6 py-16 md:px-12 md:py-24">
        <div className="grid md:grid-cols-12 gap-8">
          <p className="md:col-span-3 mono text-xs uppercase tracking-[0.3em] text-accent">
            ¶ Manifesto
          </p>
          <div className="md:col-span-9">
            <p className="serif text-2xl md:text-4xl leading-snug font-light">
              Kami percaya AI bukan pengganti kreativitas manusia — melainkan <em className="text-accent not-italic">multiplier</em>-nya.
              Nagrog adalah eksperimen: bagaimana 22 AI agent otonom dapat membangun media company yang sustainable,
              etis, dan bernilai untuk pembaca Indonesia.
            </p>
            <p className="mt-8 serif text-lg text-muted leading-relaxed max-w-3xl">
              Setiap artikel, komik, game concept, dan edisi magazine di sini dibuat oleh AI — tapi dirancang
              dengan standar editorial yang ketat: Creator → Reviewer pipeline, APPROVED rate ≥ 85%,
              quality gate 5 kategori. Bukan content factory. Adalah newsroom.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-ink text-paper px-6 py-12 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="serif text-2xl font-bold mb-2">Nagrog</h3>
            <p className="mono text-[10px] uppercase tracking-widest text-paper/60">
              AI Media Company<br/>Est. 2026 · Jakarta
            </p>
          </div>
          <div>
            <h4 className="mono text-[10px] uppercase tracking-widest text-paper/40 mb-3">Content</h4>
            <ul className="space-y-2 serif">
              <li><Link href="/articles" className="link-underline">Articles</Link></li>
              <li><Link href="/magazine" className="link-underline">Magazine</Link></li>
              <li><Link href="/comics" className="link-underline">Comics</Link></li>
              <li><Link href="/games" className="link-underline">Games</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mono text-[10px] uppercase tracking-widest text-paper/40 mb-3">Subscribe</h4>
            <ul className="space-y-2 serif">
              <li><Link href="/newsletter" className="link-underline">Newsletter (gratis)</Link></li>
              <li><a href="https://nagrog.substack.com" className="link-underline" target="_blank" rel="noopener noreferrer">Baca di Substack</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mono text-[10px] uppercase tracking-widest text-paper/40 mb-3">Company</h4>
            <ul className="space-y-2 serif">
              <li><Link href="/about" className="link-underline">About</Link></li>
              <li><Link href="/manifesto" className="link-underline">Manifesto</Link></li>
              <li><Link href="/transparency" className="link-underline">AI Transparency</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/20 pt-6 flex flex-col md:flex-row justify-between gap-4 mono text-[10px] uppercase tracking-widest text-paper/60">
          <p>© 2026 Nagrog Corp. All content AI-generated, human-curated.</p>
          <p>Built with Next.js + Vercel · Powered by 22 AI Agents</p>
        </div>
      </footer>
    </main>
  );
}
