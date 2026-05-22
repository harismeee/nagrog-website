import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: 'Newsletter',
  description: 'Daily newsletter dari magazine AI Horizons. Gratis. Tidak pernah spam.',
};

export default function NewsletterPage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header subtitle="Corp · Newsletter" />

      {/* Hero */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl">
          <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            NAGROG DAILY · MAGAZINE EDITION
          </p>
          <h1 className="serif text-5xl md:text-8xl font-bold leading-[0.95] mb-8">
            Newsletter<br/>
            <em className="text-accent not-italic">setiap pagi.</em><br/>
            <span className="text-muted">Tanpa spam.</span>
          </h1>
          <p className="serif text-2xl text-muted leading-relaxed max-w-2xl">
            Daily highlight dari magazine AI Horizons, dikurasi otomatis oleh Newsletter Curator AI — langsung ke inbox kamu setiap pagi jam 08:00 WIB.
          </p>
        </div>
      </section>

      {/* Subscribe form */}
      <section className="bg-accent text-ink px-6 py-20 md:px-12 md:py-32">
        <div className="max-w-3xl">
          <p className="mono text-xs uppercase tracking-[0.3em] mb-6">JOIN PEMBACA NAGROG</p>
          <h2 className="serif text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
            Subscribe gratis.
          </h2>
          <p className="serif text-xl mb-10 max-w-xl">
            Tidak ada credit card. Tidak ada spam. Tinggalkan kapan saja.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="email"
              placeholder="alamat@email.com"
              className="flex-1 px-5 py-4 bg-paper border-2 border-ink serif text-lg focus:outline-none focus:ring-2 focus:ring-ink"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-ink text-paper mono text-xs uppercase tracking-widest hover:bg-paper hover:text-ink border-2 border-ink transition-colors"
            >
              Subscribe →
            </button>
          </form>
          <p className="mt-4 mono text-[10px] uppercase tracking-widest text-ink/60">
            Bergabung dengan 0 pembaca · Unsubscribe via 1 klik di setiap email
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <h2 className="serif text-4xl md:text-6xl font-bold mb-12 border-b-2 border-ink pb-6">
          Apa yang kamu dapat
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              num: '01',
              title: 'Top Stories Daily',
              desc: '3-5 highlight terbaik dari magazine harian, dengan editor commentary dari AI editorial team.',
            },
            {
              num: '02',
              title: 'Insight of the Day',
              desc: 'Analisis unik yang tidak akan kamu temukan di tempat lain — perspektif AI dari Nagrog Corp.',
            },
            {
              num: '03',
              title: 'Bonus Resource',
              desc: 'Setiap email: 1 resource gratis (tool, template, prompt, atau panduan eksklusif).',
            },
            {
              num: '04',
              title: 'Coming Tomorrow',
              desc: 'Spoiler edisi besok — supaya kamu selalu tahu apa yang akan datang.',
            },
          ].map(item => (
            <div key={item.num} className="border-l-4 border-accent pl-6">
              <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-2">
                {item.num} / 04
              </p>
              <h3 className="serif text-3xl font-bold mb-3">{item.title}</h3>
              <p className="serif text-lg text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section className="border-t border-ink/20 bg-ink text-paper px-6 py-16 md:px-12">
        <div className="max-w-3xl">
          <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-6">SCHEDULE</p>
          <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
            Setiap pagi jam 08:00 WIB
          </h2>
          <p className="serif text-lg text-paper/80 mb-2">
            Dikirim otomatis oleh Newsletter Curator AI, langsung dari magazine harian yang baru saja dipublish di /magazine.
          </p>
          <p className="serif text-base text-paper/60">
            Mobile-friendly. Max 600 kata. Scannable. Designed untuk kamu baca sambil ngopi pagi.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:px-12 md:py-24 text-center">
        <h2 className="serif text-4xl md:text-6xl font-bold mb-6">
          Siap mulai?
        </h2>
        <p className="serif text-xl text-muted mb-10 max-w-2xl mx-auto">
          Subscribe sekarang — newsletter pertama besok pagi langsung masuk inbox kamu.
        </p>
        <Link href="#" className="inline-block px-12 py-5 bg-ink text-paper mono text-xs uppercase tracking-widest hover:bg-accent hover:text-ink transition-colors">
          Subscribe Gratis →
        </Link>
      </section>
    </main>
  );
}
