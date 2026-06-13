const CONFERENCES = [
  'Yankee Dental Congress',
  'Florida Dental Convention',
  'Western Regional Dental Experience',
  'Nevada Dental Hygienists Association',
  'SHE(EO) Texas',
  'American Academy of AI in Dentistry',
];

export default function FeaturedIn() {
  const items = [...CONFERENCES, ...CONFERENCES];

  return (
    <section style={{ background: '#C9A84C', padding: '44px 0', overflow: 'hidden' }}>
      {/* Label */}
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 9,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#080808',
          opacity: 0.75,
          textAlign: 'center',
          marginBottom: 28,
        }}
      >
        As Seen At
      </p>

      {/* Marquee */}
      <div style={{ overflow: 'hidden' }}>
        <div className="animate-marquee" style={{ width: 'max-content', display: 'flex', alignItems: 'center' }}>
          {items.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: '0.15em',
                color: '#1a1a1a',
                whiteSpace: 'nowrap',
                padding: '0 36px',
              }}
            >
              {name}
              <span
                style={{
                  display: 'inline-block',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: '#080808',
                  opacity: 0.5,
                  marginLeft: 36,
                  verticalAlign: 'middle',
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
