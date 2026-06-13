import { Headphones, ExternalLink } from 'lucide-react';
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
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
        }}
      >
        {/* Cover art */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0s' }}
        >
          <div
            style={{
              aspectRatio: '1/1',
              maxWidth: 360,
              margin: '0 auto',
              border: '1px solid rgba(201,168,76,0.3)',
              background: '#111111',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background pattern */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
              }}
            />
            <Headphones size={52} color="#C9A84C" strokeWidth={1} style={{ opacity: 0.7 }} />
            <div style={{ textAlign: 'center', padding: '0 24px' }}>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#C9A84C',
                  margin: '0 0 8px',
                  lineHeight: 1.2,
                }}
              >
                Voices of Dental AI
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  color: '#888880',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Hosted by Loren King
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>New Episodes Weekly</p>
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
            Voices of Dental AI
          </h2>
          <div className="gold-line" style={{ marginBottom: 24 }} />
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#888880',
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            Hosted by Loren King — exploring the future of artificial intelligence in dentistry.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              color: '#888880',
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Each episode brings together clinicians, innovators, and thought leaders to unpack how AI is reshaping patient care, practice operations, and the future of oral health.
          </p>
          <a
            href="#"
            className="btn-gold-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
            }}
          >
            Listen to the Podcast
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
