const BARS = 28;

const bars = Array.from({ length: BARS }, (_, i) => {
  const wave = Math.abs(Math.sin(i * 1.7)) * 0.6 + Math.abs(Math.cos(i * 0.9)) * 0.4;
  return {
    angle: (360 / BARS) * i,
    height: 6 + wave * 14,
    delay: (i % 7) * 0.11 + (i % 3) * 0.06,
  };
});

const Spectrum = () => (
  <div className="relative size-24">
    <div className="absolute inset-[1.35rem] rounded-full border border-accent/25" />
    {bars.map(({ angle, height, delay }) => (
      <div
        key={angle}
        className="absolute inset-0 flex justify-center"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <span
          className="w-[2px] rounded-full bg-linear-to-t from-accent-strong to-fuchsia origin-bottom"
          style={{
            height: `${height}px`,
            animation: `spectrum 1.8s ease-in-out ${delay}s infinite`,
          }}
        />
      </div>
    ))}
  </div>
);

export default Spectrum;
