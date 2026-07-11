import { useInView } from '../hooks/useInView';

export default function Podcast() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="podcast"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#0f0f0f', padding: '100px 0' }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
        }}
      >
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginBottom: 48 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>Media</p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 3.5vw, 46px)',
              color: '#F5F0E8',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Podcast Appearances
          </h2>
          <div className="gold-line" style={{ marginBottom: 24 }} />
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#888880',
              lineHeight: 1.8,
            }}
          >
            Featured guest on{' '}
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 17,
                color: '#C9A84C',
              }}
            >
              Vices of Dental AI
            </span>
            .
          </p>
        </div>

        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          {/* Spotify embed — swap [SPOTIFY_EPISODE_EMBED_URL] with the real embed URL when available */}
          <iframe
            style={{ borderRadius: '12px', display: 'block' }}
            src="[SPOTIFY_EPISODE_EMBED_URL]"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
