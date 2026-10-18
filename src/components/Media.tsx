import { useInView } from '../hooks/useInView';

const APPEARANCES = [
  {
    kind: 'Podcast Guest',
    title: 'Conversations on AI & Healthcare',
    outlet: 'Featured interview',
    year: '2025',
  },
  {
    kind: 'Conference Keynote',
    title: 'Dental Whale Annual Conference',
    outlet: 'Highest-rated session',
    year: '2024',
  },
  {
    kind: 'Featured Speaker',
    title: 'Allied Healthcare Leadership Summit',
    outlet: 'Panel & keynote',
    year: '2024',
  },
  {
    kind: 'Guest Expert',
    title: 'Human Trafficking Awareness Series',
    outlet: 'Continuing education',
    year: '2024',
  },
];

export default function Media() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="media"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: '#0a0a0a',
        padding: 'clamp(90px, 14vh, 160px) 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(24px, 5vw, 56px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginBottom: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Media & Appearances
            </p>
            <h2
              className="serif-display"
              style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', color: '#f4f4f3', margin: 0 }}
            >
              On Stage & On Record
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(230,230,227,0.6)',
              margin: 0,
              maxWidth: 360,
            }}
          >
            Selected keynotes, guest appearances, and features. Full press kit available on request.
          </p>
        </div>

        {/* Editorial list — rows */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {APPEARANCES.map((a, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr auto auto',
                gap: 'clamp(16px, 4vw, 48px)',
                alignItems: 'center',
                padding: '28px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                transition: 'padding-left 0.4s ease, background 0.4s ease',
                transitionDelay: `${0.06 * i}s`,
                cursor: 'default',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.paddingLeft = '16px';
                e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.paddingLeft = '0';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span
                className="media-kind"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(230,230,227,0.5)',
                }}
              >
                {a.kind}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    fontSize: 'clamp(20px, 2.2vw, 26px)',
                    lineHeight: 1.3,
                    color: '#f4f4f3',
                    margin: 0,
                  }}
                >
                  {a.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 300,
                    color: 'rgba(230,230,227,0.5)',
                    margin: '6px 0 0',
                  }}
                >
                  {a.outlet}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(230,230,227,0.4)',
                }}
              >
                {a.year}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  color: 'rgba(230,230,227,0.3)',
                }}
              >
                →
              </span>
            </div>
          ))}
        </div>

        {/* Press kit note */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginTop: 48, display: 'flex', justifyContent: 'center', transitionDelay: '0.4s' }}
        >
          <a
            href="mailto:support@connectwithloren.com?subject=Press Kit Request"
            className="btn-ghost"
            style={{ textDecoration: 'none' }}
          >
            Request Press Kit
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .media-kind { display: none !important; }
        }
      `}</style>
    </section>
  );
}
