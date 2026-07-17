const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`size-3 shrink-0 ${className}`}
  >
    <path d="M3.5 8.5 8.5 3.5" />
    <path d="M4 3.5h4.5V8" />
  </svg>
);

export default ArrowUpRight;
