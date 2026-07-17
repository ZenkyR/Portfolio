const rows = [
  { width: "w-24", state: "ok", delay: 0 },
  { width: "w-20", state: "ok", delay: 0.5 },
  { width: "w-28", state: "down", delay: 1 },
  { width: "w-16", state: "ok", delay: 1.5 },
];

const dotColor = {
  ok: "bg-emerald-400",
  down: "bg-red-400",
};

const Checks = () => (
  <div className="flex h-24 w-40 flex-col justify-center gap-3">
    {rows.map(({ width, state, delay }) => (
      <div
        key={width + state}
        className="flex items-center gap-2.5"
        style={{ animation: `ping-row 4s ease-in-out ${delay}s infinite` }}
      >
        <span
          className={`size-1.5 shrink-0 rounded-full ${dotColor[state as keyof typeof dotColor]}`}
        />
        <span className={`h-[3px] rounded-full bg-white/15 ${width}`} />
      </div>
    ))}
  </div>
);

export default Checks;
