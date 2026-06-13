import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, visible } = useInView(0.08);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#080808', padding: '100px 0' }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 5vw, 72px)',
          alignItems: 'start',
        }}
      >
        {/* Left — Photo */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0s' }}>
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            {/* Gold accent border offset */}
            <div
              style={{
                position: 'absolute',
                top: 16,
                left: -16,
                right: 16,
                bottom: -16,
                border: '1px solid rgba(201,168,76,0.25)',
                zIndex: 0,
              }}
            />
            <img
              src="/50401340447_(1).jpg"
              alt="Loren King — Global Public Speaker"
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Right — Text */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>About Loren</p>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 52px)',
              color: '#C9A84C',
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Meet Loren King
          </h2>

          <div className="gold-line" style={{ marginBottom: 28 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              `Loren King is a Global Public Speaker, Registered Dental Hygienist, and advocate dedicated to advancing human trafficking awareness across healthcare and public health. With 15 years in dentistry — practicing across 7 states as a traveling hygienist — she brings a rare clinical perspective to every stage she steps onto.`,
              `She is the founder of Finding Anon, a nonprofit focused on human trafficking awareness, survivor support, and policy reform. She is also building Anon — a facial recognition tech initiative designed to help identify missing persons and disrupt trafficking networks.`,
              `Beyond advocacy, Loren serves as Co-Lead of the Council for Allied Healthcare Professionals at the American Academy of Artificial Intelligence in Dentistry, and is the host of the Voices of Dental AI podcast.`,
              `Known for fearless energy — including 34 solo skydives — Loren's mission is clear: use innovation, education, and storytelling to save lives.`,
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: '#888880',
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote
            style={{
              margin: '36px 0 32px',
              padding: '24px 28px',
              borderLeft: '2px solid #C9A84C',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 26,
                color: '#C9A84C',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              "Your vulnerability is your superpower."
            </p>
          </blockquote>

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
            Book Loren to Speak <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
