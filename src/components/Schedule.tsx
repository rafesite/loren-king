import { MapPin, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const EVENTS = [
  {
    date: 'March 10, 2026',
    location: 'Nevada',
    event: 'NVDHA',
    topic: 'Artificial Intelligence',
    topicType: 'ai',
  },
  {
    date: 'April 9, 2026',
    location: 'Arizona',
    event: 'WRDE',
    topic: 'Human Trafficking',
    topicType: 'ht',
  },
  {
    date: 'June 26, 2026',
    location: 'Florida — Orlando',
    event: 'FDC2026',
    topic: 'Human Trafficking',
    topicType: 'ht',
  },
  {
    date: 'June 27, 2026',
    location: 'London, UK',
    event: 'International',
    topic: 'Artificial Intelligence',
    topicType: 'ai',
  },
  {
    date: 'August 27, 2026',
    location: 'Texas',
    event: 'SHE(EO)',
    topic: 'Human Trafficking',
    topicType: 'ht',
  },
];

const BADGE_STYLES: Record<string, React.CSSProperties> = {
  ai: {
    background: 'rgba(201,168,76,0.12)',
    color: '#C9A84C',
    border: '1px solid rgba(201,168,76,0.3)',
  },
  ht: {
    background: 'rgba(180,80,60,0.12)',
    color: '#C87A5A',
    border: '1px solid rgba(180,80,60,0.3)',
  },
};

export default function Schedule() {
  const { ref, visible } = useInView(0.06);

  return (
    <section
      id="schedule"
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#080808', padding: '100px 0' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginBottom: 52 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>On The Road</p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 50px)',
              color: '#F5F0E8',
              lineHeight: 1.1,
              marginBottom: 10,
            }}
          >
            2026 Speaking Schedule
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              color: '#888880',
              letterSpacing: '0.06em',
            }}
          >
            Currently booking into 2028.
          </p>
        </div>

        {/* Event rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              className={`reveal card-hover schedule-event-row ${visible ? 'visible' : ''}`}
              style={{
                background: '#111111',
                padding: '22px 28px',
                display: 'grid',
                gridTemplateColumns: 'minmax(130px, 160px) 1fr auto',
                gap: 20,
                alignItems: 'center',
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#C9A84C',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {ev.date}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={11} color="#888880" strokeWidth={1.5} />
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 12,
                      color: '#888880',
                    }}
                  >
                    {ev.location}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: 15,
                    color: '#F5F0E8',
                    margin: 0,
                  }}
                >
                  {ev.event}
                </p>
              </div>

              <span
                className="schedule-badge"
                style={{
                  ...BADGE_STYLES[ev.topicType],
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 9,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  whiteSpace: 'nowrap',
                }}
              >
                {ev.topic}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ marginTop: 40, transitionDelay: '0.45s' }}
        >
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
            Book Loren for Your 2027–2028 Event
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
