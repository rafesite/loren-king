import { useInView } from '../hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    category: 'Healthcare',
    title: 'Why Every Dental Team Needs Trafficking Awareness Training',
    read: '6 min read',
    status: 'Coming soon',
  },
  {
    category: 'Leadership',
    title: 'The Clinician as Advocate: Finding Your Voice Beyond the Chair',
    read: '5 min read',
    status: 'Coming soon',
  },
  {
    category: 'AI',
    title: 'What AI in Dentistry Means for the Next Generation of Hygienists',
    read: '7 min read',
    status: 'Coming soon',
  },
];

export default function Insights() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="insights"
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
          style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Insights
            </p>
            <h2
              className="serif-display"
              style={{ fontSize: 'clamp(40px, 5.5vw, 68px)', color: '#f4f4f3', margin: 0 }}
            >
              Notes & Perspectives
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
            Essays on healthcare, advocacy, and leadership — publishing soon.
          </p>
        </div>

        {/* Articles */}
        <div
          className="stagger insights-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {ARTICLES.map((a, i) => (
            <article
              key={i}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{
                borderRight: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(32px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                minHeight: 280,
                transition: 'background 0.4s ease',
                cursor: 'default',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.018)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(230,230,227,0.5)',
                  }}
                >
                  {a.category}
                </span>
                <ArrowUpRight size={16} strokeWidth={1.5} color="rgba(255,255,255,0.3)" />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  lineHeight: 1.3,
                  color: '#f4f4f3',
                  margin: 0,
                }}
              >
                {a.title}
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 300,
                    color: 'rgba(230,230,227,0.4)',
                  }}
                >
                  {a.read}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(230,230,227,0.45)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '5px 10px',
                  }}
                >
                  {a.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) and (min-width: 861px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
