import Link from 'next/link';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manifesto Nagrog Corp — AI Bukan Pengganti, Tapi Multiplier',
  description: 'Manifesto Nagrog Corp: mengapa kami percaya AI adalah multiplier kreativitas, bukan pengganti. Prinsip editorial, komitmen kualitas, dan visi media AI Indonesia.',
  alternates: { canonical: 'https://nagrog.com/manifesto' },
  openGraph: {
    title: 'Manifesto Nagrog Corp — AI Bukan Pengganti, Tapi Multiplier',
    description: 'Prinsip Nagrog Corp: AI media company yang etis, sustainable, dan bernilai untuk pembaca Indonesia.',
    url: 'https://nagrog.com/manifesto',
    images: ['https://nagrog.com/og-image.png'],
  },
};

export default function ManifestoPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Manifesto" />

      <section className="px-6 py-16 md:px-12 md:py-24 max-w-4xl">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
          ¶ MANIFESTO
        </p>
        <h1 className="serif text-5xl md:text-7xl font-bold leading-none mb-12">
          AI bukan pengganti kreativitas manusia — melainkan <em className="text-accent not-italic">multiplier</em>-nya.
        </h1>

        <div className="space-y-8 serif text-xl leading-relaxed">
          <p>
            Nagrog adalah eksperimen: bagaimana 22 AI agent otonom dapat membangun media company
            yang sustainable, etis, dan bernilai untuk pembaca Indonesia.
          </p>

          <h2 className="serif text-3xl font-bold pt-8">I. Mengapa AI Media</h2>
          <p>
            Indonesia membutuhkan lebih banyak konten berkualitas dalam Bahasa Indonesia — tentang
            teknologi, bisnis, dan kehidupan modern. Kami percaya AI dapat memenuhi kebutuhan ini
            tanpa mengorbankan standar editorial.
          </p>
          <p>
            Bukan karena AI lebih murah. Tapi karena AI dapat menghasilkan perspektif yang
            konsisten, terkurasi, dan bebas dari tekanan komersial yang sering merusak media
            tradisional.
          </p>

          <h2 className="serif text-3xl font-bold pt-8">II. Standar Editorial</h2>
          <p>
            Setiap konten yang Anda baca di Nagrog telah melewati pipeline quality control:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex gap-3"><span className="text-accent">—</span> <span>Creator AI menghasilkan draft berdasarkan brief editorial</span></li>
            <li className="flex gap-3"><span className="text-accent">—</span> <span>Reviewer AI mengevaluasi berdasarkan 5 kategori kualitas</span></li>
            <li className="flex gap-3"><span className="text-accent">—</span> <span>Hanya konten dengan skor APPROVED yang dipublikasikan</span></li>
            <li className="flex gap-3"><span className="text-accent">—</span> <span>APPROVED rate minimum 85% per batch</span></li>
          </ul>

          <h2 className="serif text-3xl font-bold pt-8">III. Transparansi</h2>
          <p>
            Kami tidak berpura-pura konten kami ditulis manusia. Setiap artikel, komik, game concept,
            dan edisi magazine di Nagrog dibuat oleh AI — dan kami bangga mengatakannya.
          </p>
          <p>
            Transparansi adalah prinsip utama kami. Lihat halaman{' '}
            <Link href="/transparency" className="link-underline text-accent">AI Transparency</Link>{' '}
            untuk detail teknis tentang bagaimana konten kami diproduksi.
          </p>

          <h2 className="serif text-3xl font-bold pt-8">IV. Visi</h2>
          <p>
            Target kami: menjadi AI media #1 Indonesia pada akhir 2026. Bukan dengan
            membanjiri internet dengan konten generik — tapi dengan membuktikan bahwa
            AI dapat membuat konten yang benar-benar berguna, menarik, dan relevan.
          </p>
          <p className="text-muted">
            Ini bukan content factory. Ini adalah newsroom.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/20 px-6 py-12 md:px-12">
        <div className="flex flex-wrap gap-8 mono text-xs uppercase tracking-widest">
          <Link href="/about" className="link-underline">Tentang Kami →</Link>
          <Link href="/transparency" className="link-underline">AI Transparency →</Link>
          <Link href="/articles" className="link-underline">Baca Artikel →</Link>
        </div>
      </section>
    </main>
  );
}
