const PER_RING = 4;
const RING_HEIGHT = 46;
const MAX_RADIUS = 190;
const MIN_RADIUS = 46;
const SLOWEST = 34;
const FASTEST = 17;
const WIDEST_DRIFT = 15;
const TIGHTEST_DRIFT = 3;

const layout = (items: string[]) => {
  const widestFirst = [...items].sort((a, b) => b.length - a.length);
  const rings = Math.ceil(widestFirst.length / PER_RING);
  const spread = Math.max(rings - 1, 1);

  return widestFirst.map((label, index) => {
    const ring = Math.floor(index / PER_RING);
    const angle = (360 / PER_RING) * (index % PER_RING) + ring * 24;

    return {
      label,
      angle,
      top: ring * RING_HEIGHT,
      radius: MAX_RADIUS - ring * ((MAX_RADIUS - MIN_RADIUS) / spread),
      spin: SLOWEST - ring * ((SLOWEST - FASTEST) / spread),
      drift: WIDEST_DRIFT - ring * ((WIDEST_DRIFT - TIGHTEST_DRIFT) / spread),
      phase: angle / 360,
      height: rings * RING_HEIGHT,
    };
  });
};

const SkillTornado = ({ items }: { items: string[] }) => {
  const placed = layout(items);

  return (
    <ul
      className="tornado"
      style={{ height: `${placed[0]?.height ?? 0}px` }}
      aria-label="Compétences"
    >
      {placed.map(({ label, top, radius, spin, drift, phase }) => (
        <li
          key={label}
          className="tornado-item rounded-full border border-accent/25 bg-accent-strong/10 px-2.5 py-1.5 text-[0.7rem] leading-none text-accent sm:px-4 sm:py-2 sm:text-sm sm:leading-normal"
          style={
            {
              "--top": `${top}px`,
              "--radius": `${radius}px`,
              "--spin": `${spin}s`,
              "--drift": `${drift}px`,
              "--phase": phase,
            } as React.CSSProperties
          }
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default SkillTornado;
