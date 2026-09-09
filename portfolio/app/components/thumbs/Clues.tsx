const nodes = {
  a: { x: 18, y: 26 },
  b: { x: 56, y: 14 },
  c: { x: 40, y: 66 },
  d: { x: 88, y: 44 },
  e: { x: 122, y: 72 },
  f: { x: 116, y: 18 },
};

const threads: [keyof typeof nodes, keyof typeof nodes][] = [
  ["a", "b"],
  ["a", "c"],
  ["b", "d"],
  ["c", "d"],
  ["d", "e"],
  ["b", "f"],
];

const Clues = () => (
  <svg viewBox="0 0 140 96" className="h-24 w-40" role="presentation">
    {threads.map(([from, to]) => (
      <line
        key={`${from}${to}`}
        x1={nodes[from].x}
        y1={nodes[from].y}
        x2={nodes[to].x}
        y2={nodes[to].y}
        stroke="currentColor"
        strokeWidth="0.75"
        className="text-accent/35"
      />
    ))}

    {Object.entries(nodes).map(([key, { x, y }]) => (
      <circle
        key={key}
        cx={x}
        cy={y}
        r={key === "d" ? 4 : 2.5}
        fill="currentColor"
        className={key === "d" ? "text-fuchsia" : "text-accent/70"}
      />
    ))}
  </svg>
);

export default Clues;
