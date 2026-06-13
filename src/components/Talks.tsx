import { useInView } from '../hooks/useInView';

const TALKS = [
  {
    num: '01',
    title: 'Human Trafficking Awareness',
    desc: '30% of victims sit in your chair each year. Here\'s how to spot the signs and respond with confidence.',
  },
  {
    num: '02',
    title: 'AI In Dentistry',
    desc: 'From static to real-time: how AI is transforming case support, patient care, and practice growth.',
  },
  {
    num: '03',
    title: 'The Airway Blueprint',
    desc: 'Start-to-finish education: screening, implementation, and how to get paid for airway solutions.',
  },
  {
    num: '04',
    title: 'Elevating Dental Hygiene',
    desc: 'Raising the standard of clinical excellence and professional identity in hygiene.',
  },
  {
    num: '05',
    title: 'The Hygiene Shortage Myth',
    desc: 'A bold look at what\'s really driving the shortage — and what leaders can do about it.',
  },
  {
    num: '06',
    title: 'Beyond Survival: The Human Experience',
    desc: 'Empowering healthcare teams to lead with compassion, resilience, and purpose.',
  },
];

export default function Talks() {
  const { ref, visible } = useInView(0.06);

  return (
    <section
      id="talks"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#080808', padding: '100px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>Signature Programs</p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 50px)',
              color: '#F5F0E8',
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            2026–2027 Signature Talks
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              color: '#888880',
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Six powerful programs designed to challenge perspectives, inspire change, and transform the way we practice — and live — dentistry.
          </p>
        </div>

        {/* Grid */}
        <div
          className="stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 1,
            background: 'rgba(201,168,76,0.08)',
          }}
        >
          {TALKS.map((talk) => (
            <div
              key={talk.num}
              className={`reveal card-hover ${visible ? 'visible' : ''}`}
              style={{
                background: '#111111',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                cursor: 'default',
              }}
            >
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 700,
                  fontSize: 42,
                  color: 'rgba(201,168,76,0.35)',
                  lineHeight: 1,
                  display: 'block',
                }}
              >
                {talk.num}
              </span>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 16,
                  color: '#F5F0E8',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {talk.title}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: '#888880',
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {talk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            color: '#888880',
            textAlign: 'center',
            marginTop: 32,
            lineHeight: 1.7,
            transitionDelay: '0.5s',
          }}
        >
          Sponsorship support available by several companies. Inquire at{' '}
          <a
            href="mailto:support@connectwithloren.com"
            style={{ color: '#C9A84C', textDecoration: 'none' }}
          >
            support@connectwithloren.com
          </a>
        </p>
      </div>
    </section>
  );
}
