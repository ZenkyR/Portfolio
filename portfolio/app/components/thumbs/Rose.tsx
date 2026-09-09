const SPOKES = 12;
const RINGS = 6;
const RING_STEP = 7;

const points = [
  { x: 48, y: 48, ring: 0 },
  ...Array.from({ length: RINGS }, (_, r) => r + 1).flatMap((ring) =>
    Array.from({ length: SPOKES }, (_, spoke) => {
      const angle = (spoke / SPOKES) * Math.PI * 2;
      return {
        x: 48 + Math.cos(angle) * ring * RING_STEP,
        y: 48 + Math.sin(angle) * ring * RING_STEP,
        ring,
      };
    }),
  ),
];

const Rose = () => (
  <svg viewBox="0 0 96 96" className="size-20" role="presentation">
    {[2, 4, 6].map((ring) => (
      <circle
        key={ring}
        cx="48"
        cy="48"
        r={ring * RING_STEP}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-white/10"
      />
    ))}

    {points.map(({ x, y, ring }) => (
      <circle
        key={`${x}-${y}`}
        cx={x}
        cy={y}
        r={ring === 0 ? 2.6 : 1.7}
        fill="currentColor"
        className={ring === 0 ? "text-fuchsia" : "text-accent"}
        opacity={ring === 0 ? 1 : 0.95 - ring * 0.12}
      />
    ))}
  </svg>
);

export default Rose;
