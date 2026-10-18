import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const CREDIBILITY = [
  '15 years in clinical dental hygiene',
  'Practiced across 10 states',
  'Co-Lead, Council for Allied Healthcare Professionals — AAID',
  'Recognized voice in AI & human-centered healthcare',
];

export default function About() {
  const { ref, visible } = useInView(0.12);
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: '#0a0a0a',
        padding: 'clamp(90px, 14vh, 160px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 56px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
          gap: 'clamp(48px, 8vw, 112px)',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Photo — editorial frame */}
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <div style={{ position: 'relative', aspectRatio: '4/5', maxWidth: 540, margin: '0 auto' }}>
            {/* Thin offset frame */}
            <div
              style={{
                position: 'absolute',
                top: 18,
                left: -18,
                right: 18,
                bottom: -18,
                border: '1px solid rgba(255,255,255,0.12)',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                zIndex: 1,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setHovered((v) => !v)}
            >
              <img
                src="/meet_loren1.jpg"
                alt="Loren King — Speaker and Advocate"
                className="img-editorial"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'opacity 0.7s ease',
                  opacity: hovered ? 0 : 1,
                }}
              />
              <img
                src="/meet_loren2.jpg"
                alt="Loren King"
                className="img-editorial"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: hovered ? 1 : 0,
                  transition: 'opacity 0.7s ease',
                }}
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.12s' }}>
          <p className="eyebrow" style={{ marginBottom: 28 }}>
            About Loren
          </p>

          <h2
            className="serif-display"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              color: '#f4f4f3',
              margin: '0 0 32px',
            }}
          >
            Meet Loren King
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: 560 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(230,230,227,0.78)',
                margin: 0,
              }}
            >
              Loren King is a speaker, registered dental hygienist, and advocate dedicated to advancing
              human trafficking awareness and human-centered care across healthcare. With fifteen years
              in clinical practice — working as a traveling hygienist across{' '}
              <span style={{ color: '#f4f4f3', fontWeight: 400 }}>10 states</span> — she brings a rare,
              ground-level perspective to every stage she steps onto.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(230,230,227,0.78)',
                margin: 0,
              }}
            >
              She serves as Co-Lead of the Council for Allied Healthcare Professionals at the American
              Academy of Artificial Intelligence in Dentistry, and speaks nationally on healthcare,
              leadership, and advocacy.
            </p>
          </div>

          {/* Credibility list */}
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CREDIBILITY.map((c) => (
              <div
                key={c}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: 14,
                }}
              >
                <span style={{ width: 18, height: 1, background: 'rgba(255,255,255,0.4)', marginTop: 11, flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                    color: 'rgba(230,230,227,0.85)',
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>

          {/* Pullout quote */}
          <blockquote
            style={{
              marginTop: 44,
              paddingLeft: 24,
              borderLeft: '1px solid rgba(255,255,255,0.4)',
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(22px, 2.6vw, 30px)',
                lineHeight: 1.4,
                color: '#f4f4f3',
                margin: 0,
              }}
            >
              “Your vulnerability is your superpower.”
            </p>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
