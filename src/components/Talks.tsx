import { useInView } from '../hooks/useInView';

const TALKS = [
  {
    num: '01',
    title: 'Human Trafficking Awareness in Healthcare',
    desc: 'Recognizing the signs of trafficking in clinical settings and responding with confidence, compassion, and protocol.',
  },
  {
    num: '02',
    title: 'AI in Dentistry',
    desc: 'From static to real-time: how artificial intelligence is transforming case support, patient care, and practice growth.',
  },
  {
    num: '03',
    title: 'The Airway Blueprint',
    desc: 'End-to-end education on airway health — screening, implementation, and building a thriving airway program.',
  },
  {
    num: '04',
    title: 'Elevating Dental Hygiene',
    desc: 'Raising the standard of clinical excellence and professional identity across the hygiene community.',
  },
  {
    num: '05',
    title: 'The Hygiene Shortage Myth',
    desc: 'A bold, data-informed look at what is really driving the workforce shortage — and what leaders can do about it.',
  },
  {
    num: '06',
    title: 'Beyond Survival: The Human Experience',
    desc: 'Empowering healthcare teams to lead with resilience, purpose, and human-centered care.',
  },
];

export default function Talks() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="talks"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: '#080808',
        padding: 'clamp(90px, 14vh, 160px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(24px, 5vw, 56px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ maxWidth: 720, marginBottom: 72 }}
        >
          <p className="eyebrow" style={{ marginBottom: 24 }}>
            Signature Programs
          </p>
          <h2
            className="serif-display"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              color: '#f4f4f3',
              margin: '0 0 28px',
            }}
          >
            Speaking Topics
          </h2>
          <div className="divider" style={{ marginBottom: 28 }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(230,230,227,0.7)',
              margin: 0,
              maxWidth: 560,
            }}
          >
            Six powerful programs designed to challenge perspectives, inspire change, and transform the
            way healthcare professionals practice — and lead.
          </p>
        </div>

        {/* Editorial grid — hairline dividers, no boxes */}
        <div
          className="stagger talks-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {TALKS.map((talk) => (
            <div
              key={talk.num}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{
                borderRight: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(32px, 4vw, 52px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                minHeight: 280,
                transition: 'background 0.4s ease',
                background: 'transparent',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.018)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: 30,
                  color: 'rgba(255,255,255,0.3)',
                  lineHeight: 1,
                }}
              >
                {talk.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: 'clamp(22px, 2.2vw, 28px)',
                  lineHeight: 1.2,
                  color: '#f4f4f3',
                  margin: 0,
                }}
              >
                {talk.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'rgba(230,230,227,0.6)',
                  margin: 0,
                }}
              >
                {talk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginTop: 56, display: 'flex', justifyContent: 'center', transitionDelay: '0.4s' }}
        >
          <a href="#contact" className="btn-ghost" style={{ textDecoration: 'none' }}>
            Request a Custom Topic
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) and (min-width: 861px) {
          .talks-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .talks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
