import { Mic, Award, Users, Radio, Handshake, Monitor } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const OFFERINGS = [
  {
    Icon: Mic,
    title: 'Keynote Speaking',
    desc: 'Dynamic, story-driven keynotes for conferences and events',
  },
  {
    Icon: Award,
    title: 'Continuing Education (CE)',
    desc: 'Accredited CE courses for dental professionals',
  },
  {
    Icon: Users,
    title: 'Healthcare Team Training',
    desc: 'On-site workshops for clinical teams',
  },
  {
    Icon: Radio,
    title: 'Podcast Guest Appearances',
    desc: 'Available for interviews and guest episodes',
  },
  {
    Icon: Handshake,
    title: 'Brand & KOL Collaborations',
    desc: 'Strategic partnerships with aligned brands',
  },
  {
    Icon: Monitor,
    title: 'Webinars & Virtual Events',
    desc: 'Engaging virtual education and presentations',
  },
];

export default function BookFor() {
  const { ref, visible } = useInView(0.06);

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#0a0a0a', padding: '100px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>Engagements</p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 50px)',
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}
          >
            Book Loren For...
          </h2>
        </div>

        {/* Grid */}
        <div
          className="stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {OFFERINGS.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className={`reveal card-hover ${visible ? 'visible' : ''}`}
              style={{
                background: '#111111',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={18} color="#C9A84C" strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#F5F0E8',
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13,
                  color: '#888880',
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
