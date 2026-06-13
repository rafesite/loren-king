export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(160deg, #1c1c1c 0%, #0d0d0d 55%, #080808 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Eyebrow */}
      <div
        className="hero-eyebrow"
        style={{
          position: "absolute",
          top: "80px",
          width: "100%",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.3em",
          color: "#C9A84C",
          textTransform: "uppercase",
          opacity: 0.8,
          zIndex: 3,
        }}
      >
        Global Public Speaker · RDH · Human Trafficking Advocate
      </div>

      {/* BIG NAME — behind photo on desktop, stacked LOREN/KING on mobile */}
      <div
        className="hero-name-container"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "18%",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <span
          className="hero-name hero-name-animate"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            display: "block",
            lineHeight: 1,
          }}
        >
          LOREN KING
        </span>
      </div>

      {/* PHOTO */}
      <div
        className="hero-photo-container hero-photo-wrap"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          zIndex: 2,
          width: "clamp(280px, 42vw, 560px)",
          height: "72vh",
        }}
      >
        <img
          src="/loren-hero.png.png"
          alt="Loren King"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </div>

      {/* CTA Buttons — bottom left on desktop, centered on mobile */}
      <div
        className="hero-cta-buttons"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "6%",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <a
          href="#contact"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#080808",
            background: "#C9A84C",
            border: "none",
            padding: "12px 24px",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Book Loren to Speak
        </a>
        <a
          href="#talks"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C9A84C",
            background: "transparent",
            border: "0.5px solid rgba(201,168,76,0.6)",
            padding: "12px 24px",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Explore Talks
        </a>
      </div>

      {/* Tagline — bottom right (hidden on mobile) */}
      <div
        className="hero-tagline"
        style={{
          position: "absolute",
          bottom: "44px",
          right: "6%",
          zIndex: 3,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "15px",
          color: "#C9A84C",
          textAlign: "right",
          lineHeight: 1.7,
          opacity: 0.9,
        }}
      >
        Humanity First.<br />Innovation for Impact.
      </div>

      {/* Side label */}
      <div
        className="hero-side-label"
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "7px",
          letterSpacing: "0.24em",
          color: "#2a2a2a",
          textTransform: "uppercase",
          zIndex: 3,
          whiteSpace: "nowrap",
        }}
      >
        connectwithloren.com
      </div>

      {/* Animations */}
      <style>{`
        .hero-name-animate {
          animation: goldCycle 3s ease-in-out infinite;
        }
        @keyframes goldCycle {
          0%   { color: #ffffff; }
          50%  { color: #C9A84C; }
          100% { color: #ffffff; }
        }
        .hero-photo-wrap {
          animation: heroFadeIn 1.4s ease-out forwards;
          opacity: 0;
        }
        @keyframes heroFadeIn {
          0% {
            opacity: 0;
            transform: scale(1.06) translateX(-50%);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
