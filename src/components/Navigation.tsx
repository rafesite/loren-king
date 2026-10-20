import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Speaking', href: '#talks' },
  { label: 'Topics', href: '#book-for' },
  { label: 'Media', href: '#media' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          background: scrolled || menuOpen ? 'rgba(8,8,8,0.82)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            padding: '22px clamp(24px, 5vw, 56px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 'clamp(24px, 4vw, 48px)',
          }}
        >
          {/* Desktop nav */}
          <nav
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '38px', marginRight: 'auto' }}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link" style={{ textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="desktop-nav" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                background: '#f4f4f3',
                padding: '11px 22px',
                border: '1px solid #f4f4f3',
                transition: 'background 0.3s ease, color 0.3s ease',
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#f4f4f3';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#f4f4f3';
                e.currentTarget.style.color = '#0a0a0a';
              }}
            >
              Book Loren
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              color: '#f4f4f3',
              padding: 4,
            }}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#060606',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '34px',
            animation: 'preFadeUp 0.5s ease both',
          }}
        >
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontSize: 'clamp(32px, 8vw, 48px)',
                color: '#f4f4f3',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                animation: `preFadeUp 0.6s ${0.05 * i + 0.1}s cubic-bezier(0.22,1,0.36,1) both`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 18,
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              background: '#f4f4f3',
              padding: '15px 34px',
              textDecoration: 'none',
            }}
          >
            Book Loren to Speak
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
