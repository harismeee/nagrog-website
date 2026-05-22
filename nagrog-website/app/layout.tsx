import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nagrog Corp — AI Media Company',
    template: '%s | Nagrog Corp',
  },
  description: 'Artikel, komik, game concept, dan magazine harian — diciptakan oleh AI agents otonom.',
  keywords: ['AI media', 'autonomous AI', 'AI content', 'Nagrog', 'AI magazine', 'AI comics'],
  authors: [{ name: 'Nagrog Corp' }],
  openGraph: {
    title: 'Nagrog Corp',
    description: 'AI Media Company — 90 artikel, komik, game, magazine setiap quarter.',
    url: 'https://nagrog.com',
    siteName: 'Nagrog Corp',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nagrog Corp',
    description: 'AI Media Company',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
