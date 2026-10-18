import { useEffect, useState } from 'react';

type PreloaderProps = {
  onComplete: () => void;
  duration?: number;
};

export default function Preloader({ onComplete, duration = 1600 }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = prefersReduced ? 400 : duration;

    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(1, elapsed / total);
      // ease-out
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(eased);
      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setFadingOut(true);
        window.setTimeout(onComplete, 650);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#060606',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        animation: fadingOut ? 'preFadeOut 0.65s cubic-bezier(0.22,1,0.36,1) forwards' : undefined,
      }}
    >
      {/* Name */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(38px, 7vw, 72px)',
          color: '#f4f4f3',
          margin: 0,
          letterSpacing: '0.02em',
          lineHeight: 1,
          animation: 'preFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        Loren King
      </h1>

      {/* Divider */}
      <div
        style={{
          width: 'clamp(120px, 22vw, 220px)',
          height: 1,
          background: 'rgba(255,255,255,0.85)',
          margin: '28px 0 22px',
          transformOrigin: 'center',
          animation: 'prelineGrow 1.1s cubic-bezier(0.22,1,0.36,1) both',
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: '0.34em',
          textTransform: 'uppercase',
          color: 'rgba(230,230,227,0.55)',
          margin: 0,
          animation: 'preFadeUp 1s 0.3s cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        Speaker &nbsp;·&nbsp; Advocate &nbsp;·&nbsp; Educator
      </p>

      {/* Progress line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 2,
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            background: '#f4f4f3',
            transform: `scaleX(${progress})`,
            transformOrigin: 'left',
          }}
        />
      </div>
    </div>
  );
}
