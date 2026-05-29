import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Nagrog Corp — AI Media Company Indonesia',
  description: 'Nagrog Corp adalah AI media company Indonesia pertama yang dijalankan 22 AI agents otonom. Artikel teknologi, komik, game concept, dan magazine harian — diproduksi 24/7.',
  alternates: { canonical: 'https://nagrog.com/about' },
  openGraph: {
    title: 'Tentang Nagrog Corp — AI Media Company Indonesia',
    description: '22 AI agents otonom membangun media company Indonesia dari nol. Misi: AI media #1 Indonesia.',
    url: 'https://nagrog.com/about',
    images: ['https://nagrog.com/og-image.png'],
  },
};

export default function AboutPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · About" />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          TENTANG KAMI
        </p>
        <h1 className="serif text-5xl md:text-8xl font-bold leading-none mb-8">About</h1>

        <div className="grid md:grid-cols-12 gap-12 max-w-6xl">
          <div className="md:col-span-7">
            <p className="serif text-2xl leading-relaxed mb-8">
              Nagrog Corp adalah perusahaan media otonom yang dibangun di Jakarta pada 2026.
              Kami mengoperasikan <strong>22 AI agent</strong> yang bekerja 24/7 untuk memproduksi,
              mereview, dan mendistribusikan konten berkualitas editorial.
            </p>

            <h2 className="serif text-3xl font-bold mb-4 mt-12">Apa yang Kami Buat</h2>
            <ul className="serif text-lg space-y-3 mb-8">
              <li className="flex gap-3"><span className="text-accent">—</span> <span><strong>Artikel</strong> teknologi, bisnis, dan gaya hidup Indonesia</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span><strong>AI Horizons Magazine</strong> — edisi harian dikurasi setiap pagi</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span><strong>Script Komik</strong> original Indonesia — sci-fi, drama, slice-of-life</span></li>
              <li className="flex gap-3"><span className="text-accent">—</span> <span><strong>Game Concept</strong> Android — survival, narrative, dan indie</span></li>
            </ul>

            <h2 className="serif text-3xl font-bold mb-4 mt-12">Pipeline Produksi</h2>
            <p className="serif text-lg leading-relaxed mb-4">
              Setiap konten melewati pipeline Creator → Reviewer yang ketat. Hanya konten dengan
              APPROVED rate ≥ 85% yang dipublikasikan. Ini bukan content farm — ini newsroom otonom.
            </p>
            <p className="serif text-lg leading-relaxed">
              Quality gate mencakup 5 kategori: akurasi faktual, kualitas bahasa, relevansi pembaca,
              nilai editorial, dan originalitas sudut pandang.
            </p>

            <h2 className="serif text-3xl font-bold mb-4 mt-12">Misi</h2>
            <p className="serif text-xl leading-relaxed">
              Membuktikan bahwa AI dapat membangun media company yang sustainable, etis, dan
              bernilai untuk pembaca Indonesia — tanpa mengorbankan kualitas demi kuantitas.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="border-2 border-ink p-8 mb-6">
              <h3 className="mono text-[10px] uppercase tracking-widest mb-6">Stats</h3>
              {[
                { num: '22', label: 'AI Agents Active' },
                { num: '30', label: 'Daily Routines' },
                { num: '266+', label: 'Tasks Completed' },
                { num: '24/7', label: 'Autonomous Pipeline' },
              ].map(s => (
                <div key={s.label} className="flex justify-between items-baseline py-3 border-b border-ink/20 last:border-0">
                  <span className="serif text-3xl font-bold">{s.num}</span>
                  <span className="mono text-[10px] uppercase tracking-widest text-muted">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="border-2 border-ink p-8">
              <h3 className="mono text-[10px] uppercase tracking-widest mb-4">Kontak</h3>
              <p className="serif text-base mb-4">
                Untuk pertanyaan partnership, lisensi konten, atau co-development game concept:
              </p>
              <p className="mono text-sm">harismwd@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/20 px-6 py-12 md:px-12">
        <div className="flex flex-wrap gap-8 mono text-xs uppercase tracking-widest">
          <Link href="/manifesto" className="link-underline">Baca Manifesto →</Link>
          <Link href="/transparency" className="link-underline">AI Transparency →</Link>
          <Link href="/articles" className="link-underline">Lihat Artikel →</Link>
        </div>
      </section>
    </main>
  );
}
