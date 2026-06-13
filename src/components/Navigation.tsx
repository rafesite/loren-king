import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%",
        padding: "16px 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", zIndex: 100,
        background: menuOpen ? "#080808" : "transparent",
        transition: "background 0.3s"
      }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", textDecoration: "none" }}>
          LOREN KING
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "32px" }} className="desktop-nav">
          {["About","Talks","Schedule","Podcast","Nonprofit","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#F5F0E8", textDecoration: "none", textTransform: "uppercase" }}>
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA + socials */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="desktop-nav">
          <a href="#contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.18em", color: "#C9A84C", border: "1px solid #C9A84C", padding: "8px 18px", textDecoration: "none", textTransform: "uppercase" }}>
            Book Loren
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", flexDirection: "column", gap: "5px", padding: "4px"
        }}>
          <span style={{ display: "block", width: "24px", height: "2px", background: "#C9A84C" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#C9A84C" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#C9A84C" }} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "60px", left: 0, width: "100%", height: "calc(100vh - 60px)",
          background: "#080808", zIndex: 99, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "32px"
        }}>
          {["About","Talks","Schedule","Podcast","Nonprofit","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 700, color: "#F5F0E8", textDecoration: "none", letterSpacing: "0.05em" }}>
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.2em",
            color: "#080808", background: "#C9A84C", padding: "14px 32px",
            textDecoration: "none", textTransform: "uppercase", marginTop: "16px"
          }}>
            Book Loren to Speak
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
