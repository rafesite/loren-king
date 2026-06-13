import { Heart, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Nonprofit() {
  const { ref, visible } = useInView(0.08);

  return (
    <section
      id="nonprofit"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grain-overlay"
      style={{ background: '#131313', padding: '100px 0' }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              border: '1px solid rgba(201,168,76,0.25)',
              padding: '10px 18px',
              marginBottom: 28,
            }}
          >
            <Heart size={14} color="#C9A84C" strokeWidth={1.5} />
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}
            >
              Nonprofit Initiative
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(48px, 6vw, 80px)',
              color: '#C9A84C',
              lineHeight: 0.95,
              marginBottom: 20,
              letterSpacing: '-0.01em',
            }}
          >
            Finding
            <br />
            Anon
          </h2>

          <div className="gold-line" style={{ marginBottom: 24 }} />

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              color: '#888880',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Awareness · Support · Reform
          </p>
        </div>

        {/* Right */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>The Mission</p>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3vw, 36px)',
              color: '#F5F0E8',
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            A nonprofit dedicated to human trafficking awareness, survivor support, and policy reform.
          </h3>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#888880',
              lineHeight: 1.85,
              marginBottom: 20,
            }}
          >
            Loren founded Finding Anon to create systemic change in how communities recognize, respond to, and prevent human trafficking. She is also developing Anon — a facial recognition technology initiative designed to identify missing persons and disrupt trafficking networks.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: '#888880',
              lineHeight: 1.85,
              marginBottom: 36,
            }}
          >
            Through education, advocacy, and technology, Finding Anon is building a future where every healthcare professional has the tools to recognize trafficking — and every survivor has access to support.
          </p>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#C9A84C',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'gap 0.2s ease',
            }}
            onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '12px')}
            onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '8px')}
          >
            Learn More About Finding Anon
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
