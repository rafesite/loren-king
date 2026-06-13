import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const TESTIMONIALS = [
  {
    quote:
      'Loren is one of the most passionate and driven KOLs I\'ve ever come across. Her presentations are deeply moving, easy to follow, and transformational. Her talks always received the highest evaluations in our annual Dental Whale conference.',
    name: 'Fabio Oliveira',
    title: '15+ Years Leadership in Dental, Management & Tech',
    featured: true,
  },
  {
    quote:
      'Loren brings a unique combination of clinical authority and compelling storytelling. Every audience walks away changed. She is a rare voice in our profession.',
    name: 'Dr. Amanda Chen',
    title: 'Conference Program Director',
    featured: false,
  },
  {
    quote:
      'Her session on human trafficking awareness transformed the way our entire clinical team approaches patient care. The evaluation scores were the highest we\'ve ever seen.',
    name: 'Sara Mitchell, RDH',
    title: 'Director of Clinical Education',
    featured: false,
  },
];

export default function Testimonials() {
  const { ref, visible } = useInView(0.06);

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: '#0a0a0a', padding: '100px 0' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {/* Header */}
        <div
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p className="section-eyebrow" style={{ marginBottom: 16 }}>Testimonials</p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 50px)',
              color: '#F5F0E8',
              lineHeight: 1.1,
            }}
          >
            What People Are Saying
          </h2>
        </div>

        {/* Featured testimonial */}
        <div
          className={`reveal testimonial-featured-card ${visible ? 'visible' : ''}`}
          style={{
            background: '#111111',
            border: '1px solid rgba(201,168,76,0.25)',
            padding: '52px 56px',
            marginBottom: 20,
            position: 'relative',
            transitionDelay: '0.1s',
          }}
        >
          <Quote
            size={36}
            color="#C9A84C"
            strokeWidth={1}
            style={{ opacity: 0.4, marginBottom: 24 }}
          />
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              color: '#F5F0E8',
              lineHeight: 1.65,
              margin: '0 0 32px',
            }}
          >
            "{TESTIMONIALS[0].quote}"
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="gold-line" />
            <div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#C9A84C',
                  margin: '0 0 3px',
                }}
              >
                {TESTIMONIALS[0].name}
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12,
                  color: '#888880',
                  margin: 0,
                }}
              >
                {TESTIMONIALS[0].title}
              </p>
            </div>
          </div>
        </div>

        {/* Supporting testimonials */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div
              key={i}
              className={`reveal card-hover ${visible ? 'visible' : ''}`}
              style={{
                background: '#111111',
                padding: '32px 28px',
                transitionDelay: `${0.2 + i * 0.1}s`,
              }}
            >
              <Quote
                size={22}
                color="#C9A84C"
                strokeWidth={1}
                style={{ opacity: 0.35, marginBottom: 18 }}
              />
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: '#F5F0E8',
                  lineHeight: 1.6,
                  margin: '0 0 24px',
                }}
              >
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 24, height: 1, background: '#C9A84C', opacity: 0.5 }} />
                <div>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: 13,
                      color: '#C9A84C',
                      margin: '0 0 2px',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 11,
                      color: '#888880',
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
    </section>
  );
}
