const lines = ["w-28", "w-20", "w-24", "w-16"];

const Overlay = () => (
  <div className="relative h-24 w-40 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
    <span className="absolute inset-x-0 top-0 h-4 border-b border-white/10 bg-white/[0.04]" />

    <div className="absolute inset-x-3 top-6 flex flex-col gap-2">
      {lines.map((w) => (
        <span key={w} className={`h-[3px] rounded-full bg-white/10 ${w}`} />
      ))}
    </div>

    <span
      className="absolute bottom-3 left-3 flex size-7 items-center justify-center"
      style={{ animation: "wander 9s ease-in-out infinite" }}
    >
      <span className="absolute -top-0.5 -left-0.5 size-2 rotate-45 rounded-[1px] bg-linear-to-br from-accent to-fuchsia" />
      <span className="absolute -top-0.5 -right-0.5 size-2 rotate-45 rounded-[1px] bg-linear-to-br from-accent to-fuchsia" />
      <span className="size-6 rounded-full bg-linear-to-br from-accent-strong to-fuchsia shadow-[0_0_18px_-2px] shadow-fuchsia/80" />
    </span>
  </div>
);

export default Overlay;
