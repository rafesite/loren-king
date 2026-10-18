import { useInView } from '../hooks/useInView';

const FEATURED = {
  quote:
    'Loren is one of the most passionate and driven voices I have ever come across. Her presentations are deeply moving, easy to follow, and transformational — consistently the highest-rated sessions at our annual conference.',
  name: 'Fabio Oliveira',
  title: 'Leadership in Dental, Management & Tech',
};

const SUPPORTING = [
  {
    quote:
      'Loren brings a unique combination of clinical authority and compelling storytelling. Every audience walks away changed. She is a rare voice in our profession.',
    name: 'Dr. Amanda Chen',
    title: 'Conference Program Director',
  },
  {
    quote:
      'Her session on human trafficking awareness transformed the way our entire clinical team approaches patient care. The evaluations were the highest we have ever seen.',
    name: 'Sara Mitchell, RDH',
    title: 'Director of Clinical Education',
  },
  {
    quote:
      'A rare speaker who pairs credibility with heart. Loren held the room from the first sentence to the last.',
    name: 'James Holloway',
    title: 'Event Producer',
  },
];

export default function Testimonials() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: '#080808',
        padding: 'clamp(90px, 14vh, 160px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(24px, 5vw, 56px)' }}>
        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: 64, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 24 }}>
            Testimonials
          </p>
          <h2
            className="serif-display"
            style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', color: '#f4f4f3', margin: 0 }}
          >
            In Their Words
          </h2>
        </div>

        {/* Featured — large editorial quote */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{
            marginBottom: 80,
            padding: 'clamp(40px, 6vw, 88px) 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
            transitionDelay: '0.1s',
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 80,
              lineHeight: 0.4,
              color: 'rgba(255,255,255,0.2)',
              display: 'block',
              marginBottom: 28,
            }}
          >
            “
          </span>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(24px, 3.6vw, 42px)',
              lineHeight: 1.4,
              color: '#f4f4f3',
              margin: '0 auto 40px',
              maxWidth: 920,
            }}
          >
            {FEATURED.quote}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <span style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.4)' }} />
            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#f4f4f3',
                  margin: '0 0 4px',
                }}
              >
                {FEATURED.name}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(230,230,227,0.5)',
                  margin: 0,
                }}
              >
                {FEATURED.title}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting */}
        <div
          className="stagger testimonials-grid"
        >
          {SUPPORTING.map((t, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(17px, 1.7vw, 21px)',
                  lineHeight: 1.55,
                  color: 'rgba(244,244,243,0.88)',
                  margin: 0,
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                <span style={{ width: 22, height: 1, background: 'rgba(255,255,255,0.35)' }} />
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: '#f4f4f3',
                      margin: '0 0 2px',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 300,
                      color: 'rgba(230,230,227,0.5)',
                      margin: 0,
                    }}
                  >
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
