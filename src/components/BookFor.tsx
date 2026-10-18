import { Mic, Award, Users, Radio, Handshake, Monitor } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const OFFERINGS = [
  {
    Icon: Mic,
    title: 'Keynote Speaking',
    desc: 'Story-driven keynotes for conferences, summits, and large audiences.',
  },
  {
    Icon: Award,
    title: 'Continuing Education',
    desc: 'Accredited CE courses for dental and allied healthcare professionals.',
  },
  {
    Icon: Users,
    title: 'Workshops & Team Training',
    desc: 'On-site, hands-on workshops for clinical teams and practice leaders.',
  },
  {
    Icon: Radio,
    title: 'Podcast & Guest Expert',
    desc: 'Available for interviews, guest episodes, and expert commentary.',
  },
  {
    Icon: Handshake,
    title: 'Panel Moderation',
    desc: 'Facilitating thoughtful, high-impact panel conversations.',
  },
  {
    Icon: Monitor,
    title: 'Webinars & Virtual Events',
    desc: 'Engaging virtual presentations and remote education sessions.',
  },
];

export default function BookFor() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="book-for"
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
          style={{ marginBottom: 72, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <p className="eyebrow" style={{ marginBottom: 24 }}>
            Engagements
          </p>
          <h2
            className="serif-display"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              color: '#f4f4f3',
              margin: '0 0 28px',
            }}
          >
            Book Loren For
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
              maxWidth: 520,
            }}
          >
            From keynote stages to intimate workshops, Loren brings clarity, conviction, and a clinical
            perspective to every format.
          </p>
        </div>

        {/* Grid */}
        <div
          className="stagger offerings-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {OFFERINGS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{
                borderRight: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(32px, 4vw, 52px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                minHeight: 240,
                transition: 'background 0.4s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.018)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <Icon size={26} strokeWidth={1.25} color="rgba(255,255,255,0.7)" />
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
                {title}
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
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) and (min-width: 861px) {
          .offerings-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .offerings-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
