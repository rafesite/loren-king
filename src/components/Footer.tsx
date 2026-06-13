import { Linkedin, Instagram, Facebook } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Talks', href: '#talks' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Finding Anon', href: '#nonprofit' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(201,168,76,0.12)',
        padding: '60px 0 36px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
        {/* Top row */}
        <div
          className="footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 32,
            marginBottom: 48,
          }}
        >
          {/* Logo + tagline */}
          <div>
            <a href="#" style={{ textDecoration: 'none', display: 'block', marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: '0.22em',
                  color: '#C9A84C',
                  textTransform: 'uppercase',
                }}
              >
                Loren King
              </span>
            </a>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 14,
                color: '#888880',
                margin: 0,
              }}
            >
              Humanity First. Innovation for Impact.
            </p>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px' }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#888880',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C')}
                onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#888880')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social + email */}
          <div className="footer-social-col" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: 18 }}>
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/in/lorentheactivist' },
                { Icon: Instagram, href: 'https://instagram.com/fromlorenwithlove' },
                { Icon: Facebook, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#888880',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C')}
                  onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#888880')}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <a
              href="mailto:support@connectwithloren.com"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 12,
                color: '#C9A84C',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'opacity 0.2s ease',
              }}
              onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
              onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
            >
              support@connectwithloren.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(201,168,76,0.1)', marginBottom: 28 }} />

        {/* Bottom row */}
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
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              color: '#888880',
              margin: 0,
              letterSpacing: '0.06em',
            }}
          >
            © 2026 Loren King. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11,
              color: '#2a2a2a',
              margin: 0,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            connectwithloren.com
          </p>
        </div>
      </div>
    </footer>
  );
}
