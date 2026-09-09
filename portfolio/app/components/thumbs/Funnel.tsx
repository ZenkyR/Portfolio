const rows = [
  { width: "w-32", tone: "bg-white/12" },
  { width: "w-24", tone: "bg-white/18" },
  { width: "w-16", tone: "bg-accent/50" },
  { width: "w-8", tone: "bg-linear-to-r from-accent to-fuchsia" },
];

const Funnel = () => (
  <div className="flex h-24 w-40 flex-col items-center justify-center gap-3">
    {rows.map(({ width, tone }) => (
      <span key={width} className={`h-[3px] rounded-full ${width} ${tone}`} />
    ))}
  </div>
);

export default Funnel;
