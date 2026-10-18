import { Linkedin, Instagram, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Speaking', href: '#talks' },
  { label: 'Topics', href: '#book-for' },
  { label: 'Media', href: '#media' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060606',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(64px, 9vh, 96px) 0 36px',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(24px, 5vw, 56px)' }}>
        {/* Top */}
        <div
          className="footer-top"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 34,
                color: '#f4f4f3',
                margin: '0 0 14px',
                letterSpacing: '0.02em',
              }}
            >
              Loren King
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(230,230,227,0.45)',
                margin: 0,
              }}
            >
              Speaker · Advocate · Educator
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(230,230,227,0.4)',
                margin: '0 0 22px',
              }}
            >
              Explore
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    color: 'rgba(230,230,227,0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#f4f4f3')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(230,230,227,0.7)')}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(230,230,227,0.4)',
                margin: '0 0 22px',
              }}
            >
              Connect
            </p>
            <a
              href="mailto:support@connectwithloren.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: 'rgba(230,230,227,0.7)',
                textDecoration: 'none',
                marginBottom: 22,
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#f4f4f3')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(230,230,227,0.7)')}
            >
              <Mail size={14} strokeWidth={1.5} />
              support@connectwithloren.com
            </a>
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/in/lorentheactivist', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com/fromlorenwithlove', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: 'rgba(230,230,227,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#f4f4f3')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(230,230,227,0.6)')}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 28 }} />

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 300,
              color: 'rgba(230,230,227,0.4)',
              margin: 0,
              letterSpacing: '0.06em',
            }}
          >
            © {new Date().getFullYear()} Loren King. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 300,
              color: 'rgba(230,230,227,0.3)',
              margin: 0,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            connectwithloren.com
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
