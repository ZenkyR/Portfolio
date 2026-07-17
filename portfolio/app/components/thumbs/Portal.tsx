const Portal = () => (
  <div className="relative size-20 rounded-lg border border-white/10">
    <span className="absolute inset-x-4 -bottom-px h-[3px] rounded-full bg-linear-to-r from-transparent via-accent to-transparent shadow-[0_0_12px] shadow-accent/60" />
    <span className="absolute inset-y-4 -left-px w-[3px] rounded-full bg-linear-to-b from-transparent via-fuchsia to-transparent shadow-[0_0_12px] shadow-fuchsia/60" />

    <div className="absolute inset-0 overflow-hidden rounded-lg">
      <span
        className="absolute left-1/2 top-1/2 size-2.5 -ml-[5px] -mt-[5px] rounded-[2px] bg-linear-to-br from-accent to-fuchsia animate-portal-exit"
      />
      <span
        className="absolute left-1/2 top-1/2 size-2.5 -ml-[5px] -mt-[5px] rounded-[2px] bg-linear-to-br from-fuchsia to-accent animate-portal-enter"
      />
    </div>
  </div>
);

export default Portal;
