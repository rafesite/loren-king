import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Stat {
  prefix?: string;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 16.8, decimals: 1, suffix: 'K', label: 'Instagram Followers' },
  { value: 3098, suffix: '', label: 'LinkedIn Followers' },
  { value: 5.1, decimals: 1, suffix: 'K', label: 'Facebook Followers' },
  { value: 15, suffix: '+', label: 'Years in Dentistry' },
  { value: 34, suffix: '+', label: 'Solo Skydives' },
  { value: 7, suffix: '', label: 'States Practiced' },
];

function CountUp({ value, decimals = 0, suffix, active }: { value: number; decimals?: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(parseFloat((eased * value).toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent(value);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, value, decimals]);

  const display = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function AuthorityBar() {
  const { ref, visible } = useInView(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: '#0f0f0f',
        borderTop: '2px solid #C9A84C',
        padding: '36px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`reveal stat-item ${visible ? 'visible' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '12px 32px',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(201,168,76,0.18)' : 'none',
              transitionDelay: `${i * 0.07}s`,
              minWidth: 120,
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 700,
                fontSize: 36,
                color: '#C9A84C',
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} active={visible} />
            </span>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 10,
                letterSpacing: '0.1em',
                color: '#888880',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
