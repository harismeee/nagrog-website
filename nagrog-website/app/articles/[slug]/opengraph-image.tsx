import { ImageResponse } from 'next/og';
import { getArticleBySlug } from '@/lib/articles';

export const alt = 'Nagrog Corp Article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  const title = article?.metaTitle || article?.title || 'Nagrog Corp';
  const category = (article?.category ?? 'AI Media').toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#e8d5b7', fontSize: 28, fontWeight: 700, letterSpacing: '3px' }}>
            NAGROG
          </span>
          <span style={{ color: '#666666', fontSize: 14, letterSpacing: '8px' }}>CORP</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ color: '#c9a96e', fontSize: 18, letterSpacing: '4px' }}>
            {category}
          </div>
          <div
            style={{
              color: '#f5f0e8',
              fontSize: title.length > 60 ? 44 : 52,
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#555555', fontSize: 18, letterSpacing: '2px' }}>nagrog.com</span>
          <span style={{ color: '#c9a96e', fontSize: 16, letterSpacing: '3px' }}>AI MEDIA COMPANY</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
