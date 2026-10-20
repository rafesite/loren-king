import { useEffect, useState } from 'react';

type HeroProps = {
  active: boolean;
};

export default function Hero({ active }: HeroProps) {
  const [imgReady, setImgReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/Loren_header.jpg';
    img.onload = () => setImgReady(true);
    img.onerror = () => setImgReady(true);
    if (img.complete) setImgReady(true);
  }, []);

  const animate = active && imgReady;

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 60%, #0a0a0a 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* Soft radial light behind subject */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '80vh',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Background photo — cinematic, zoom-out reveal */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: animate ? 1 : 0,
          transform: animate ? 'scale(1)' : 'scale(1.12)',
          transition: 'opacity 1.4s cubic-bezier(0.22,1,0.36,1), transform 6s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <img
          src="/Loren_header.jpg"
          alt="Loren King — Speaker, Advocate, Educator"
          className="img-editorial"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 24%',
            display: 'block',
          }}
        />
        {/* Cinematic gradient overlays for legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.25) 32%, rgba(8,8,8,0.45) 62%, rgba(8,8,8,0.92) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.2) 30%, transparent 50%, transparent 70%, rgba(8,8,8,0.55) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 56px) clamp(80px, 12vh, 130px)',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 28px',
            textShadow: '0 1px 12px rgba(0,0,0,0.65)',
            opacity: animate ? 1 : 0,
            animation: animate ? 'heroEyebrowIn 1.2s 0.3s cubic-bezier(0.22,1,0.36,1) both' : undefined,
          }}
        >
          Speaker · Advocate · Educator
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 'clamp(58px, 11vw, 168px)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: '0 0 32px',
            textTransform: 'uppercase',
            textShadow: '0 2px 24px rgba(0,0,0,0.55)',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(40px)',
            animation: animate ? 'heroTextRise 1.1s 0.45s cubic-bezier(0.22,1,0.36,1) both' : undefined,
          }}
        >
          Loren King
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 56,
            height: 1,
            background: 'rgba(255,255,255,0.5)',
            margin: '0 0 32px',
            opacity: animate ? 1 : 0,
            transform: animate ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'opacity 0.8s 0.9s ease, transform 0.9s 0.9s cubic-bezier(0.22,1,0.36,1)',
          }}
        />

        {/* Positioning statement */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: 'clamp(20px, 2.6vw, 30px)',
            lineHeight: 1.45,
            color: '#ffffff',
            maxWidth: 620,
            margin: '0 0 48px',
            textShadow: '0 1px 16px rgba(0,0,0,0.7)',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(24px)',
            animation: animate ? 'heroTextRise 1s 0.7s cubic-bezier(0.22,1,0.36,1) both' : undefined,
          }}
        >
          Speaker, advocate, and educator advancing conversations in healthcare, leadership, and human-centered impact.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(20px)',
            animation: animate ? 'heroTextRise 1s 0.9s cubic-bezier(0.22,1,0.36,1) both' : undefined,
          }}
        >
          <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            Book Loren to Speak
          </a>
          <a href="#talks" className="btn-ghost" style={{ textDecoration: 'none' }}>
            Explore Speaking Topics
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          right: 'clamp(24px, 5vw, 56px)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          opacity: animate ? 0.6 : 0,
          transition: 'opacity 1s 1.4s ease',
        }}
        className="scroll-cue"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 9,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#ffffff',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textShadow: '0 1px 10px rgba(0,0,0,0.6)',
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .scroll-cue { display: none !important; }
        }
      `}</style>
    </section>
  );
}
