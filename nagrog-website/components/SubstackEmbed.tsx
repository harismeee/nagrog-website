/**
 * Substack Embed Form — Nagrog Daily Newsletter
 *
 * Embed code dari https://nagrog.substack.com
 * Width 480, height 320 (asli dari Substack)
 * Bisa di-tweak responsive di parent container
 */
export default function SubstackEmbed({
  width = 480,
  height = 320,
  className = '',
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) {
  return (
    <div className={`substack-embed-wrapper ${className}`}>
      <iframe
        src="https://nagrog.substack.com/embed"
        width={width}
        height={height}
        style={{
          border: '1px solid #EEE',
          background: 'white',
          maxWidth: '100%',
        }}
        frameBorder="0"
        scrolling="no"
        title="Subscribe to Nagrog Daily"
      />
    </div>
  );
}
