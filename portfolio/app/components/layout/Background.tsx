const Background = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-accent-strong/25 blur-[130px] animate-drift" />
      <div className="absolute top-1/3 -right-40 size-[34rem] rounded-full bg-fuchsia/20 blur-[140px] animate-drift-slow" />
      <div className="absolute -bottom-52 left-1/4 size-[40rem] rounded-full bg-accent-deep/30 blur-[150px] animate-drift" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,var(--color-ink)_78%)]" />
      <div className="absolute inset-0 opacity-[0.13] mix-blend-overlay grain" />
    </div>
  );
};

export default Background;
