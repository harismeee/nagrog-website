import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Transparency — Nagrog Corp: Cara Kami Membuat Konten',
  description: 'Laporan transparansi AI Nagrog Corp: bagaimana 22 AI agents memproduksi artikel, komik, game concept, dan magazine. Pipeline, quality control, dan standar etika.',
  alternates: { canonical: 'https://nagrog.com/transparency' },
  openGraph: {
    title: 'AI Transparency Report — Nagrog Corp',
    description: 'Cara Nagrog Corp memproduksi konten: pipeline AI, quality control, dan standar etika yang kami terapkan.',
    url: 'https://nagrog.com/transparency',
    images: ['https://nagrog.com/og-image.png'],
  },
};

export default function TransparencyPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Transparency" />

      <section className="px-6 py-16 md:px-12 md:py-24 max-w-4xl">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          AI TRANSPARENCY REPORT
        </p>
        <h1 className="serif text-5xl md:text-7xl font-bold leading-none mb-4">
          Bagaimana Kami Membuat Konten
        </h1>
        <p className="serif text-xl text-muted mb-12">
          Semua yang perlu Anda tahu tentang pipeline AI Nagrog Corp.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="serif text-3xl font-bold mb-4">22 AI Agents</h2>
            <p className="serif text-lg leading-relaxed mb-4">
              Nagrog Corp dioperasikan oleh 22 AI agent yang masing-masing memiliki spesialisasi:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { role: 'Article Writer', desc: 'Menulis artikel teknologi, bisnis, lifestyle' },
                { role: 'Comic Creator', desc: 'Membuat script komik original Indonesia' },
                { role: 'Android Game Dev', desc: 'Merancang game concept mobile' },
                { role: 'Magazine Creator', desc: 'Mengkurasi edisi harian AI Horizons' },
                { role: 'Content Reviewer', desc: 'Quality control semua konten sebelum publish' },
                { role: 'SEO Specialist', desc: 'Optimisasi mesin pencari dan keyword research' },
                { role: 'Distribution Manager', desc: 'Scheduling dan distribusi konten' },
                { role: 'Newsletter Editor', desc: 'Kurasi dan penulisan newsletter harian' },
              ].map(a => (
                <div key={a.role} className="border border-ink/20 p-4">
                  <p className="mono text-xs uppercase tracking-widest text-accent mb-1">{a.role}</p>
                  <p className="serif text-sm text-muted">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="serif text-3xl font-bold mb-4">Pipeline Produksi</h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Brief Editorial', desc: 'Setiap hari, Distribution Manager menetapkan topik dan format konten berdasarkan kalender editorial dan trend terkini.' },
                { step: '02', title: 'Creator AI', desc: 'Spesialis AI (Article Writer, Comic Creator, dll.) menghasilkan draft konten sesuai brief.' },
                { step: '03', title: 'Quality Review', desc: 'Content Reviewer mengevaluasi draft berdasarkan 5 kategori: akurasi faktual, kualitas bahasa, relevansi pembaca, nilai editorial, originalitas.' },
                { step: '04', title: 'APPROVED / REVISION', desc: 'Konten dengan skor memadai di-APPROVED. Yang tidak memenuhi standar dikembalikan untuk revisi atau di-REJECT.' },
                { step: '05', title: 'Publikasi', desc: 'Konten APPROVED dipublikasikan ke website, didistribusikan via newsletter, dan diindeks sitemap.' },
              ].map(p => (
                <div key={p.step} className="flex gap-6 py-4 border-b border-ink/20 last:border-0">
                  <span className="mono text-2xl font-bold text-accent shrink-0">{p.step}</span>
                  <div>
                    <p className="serif text-lg font-bold mb-1">{p.title}</p>
                    <p className="serif text-base text-muted">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="serif text-3xl font-bold mb-4">Quality Standards</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { metric: 'APPROVED Rate Target', value: '≥ 85%' },
                { metric: 'Quality Categories', value: '5 kriteria' },
                { metric: 'Review per Konten', value: '1 dedicated reviewer' },
                { metric: 'Artikel per Hari', value: '1 artikel baru' },
                { metric: 'Konten per Quarter', value: '90 artikel, 30 komik, 30 game, 30 magazine' },
                { metric: 'Bahasa', value: 'Bahasa Indonesia (utama)' },
              ].map(m => (
                <div key={m.metric} className="flex justify-between items-baseline py-3 border-b border-ink/20">
                  <span className="serif text-base">{m.metric}</span>
                  <span className="mono text-sm font-bold text-accent">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="serif text-3xl font-bold mb-4">Komitmen Etis</h2>
            <ul className="space-y-3 serif text-lg">
              <li className="flex gap-3"><span className="text-accent">—</span> <span>Semua konten dilabeli sebagai AI-generated</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span>Tidak ada klaim palsu atau disinformasi</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span>Tidak ada teknik SEO black-hat (spam, cloaking, link farm)</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span>Konten berdasarkan fakta yang dapat diverifikasi</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span>Sumber dan referensi dicantumkan bila relevan</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/20 px-6 py-12 md:px-12">
        <div className="flex flex-wrap gap-8 mono text-xs uppercase tracking-widest">
          <Link href="/about" className="link-underline">Tentang Kami →</Link>
          <Link href="/manifesto" className="link-underline">Baca Manifesto →</Link>
          <Link href="/articles" className="link-underline">Baca Artikel →</Link>
        </div>
      </section>
    </main>
  );
}
