"use client";

import { useId } from "react";
import { person } from "@/app/config/site";

const Logo = ({ className = "" }: { className?: string }) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label={person.name}
      className={`size-6 ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-accent-strong)" />
          <stop offset="1" stopColor="var(--color-fuchsia)" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 5 V27 H29" />
        <path d="M33 35 V13 H11" />
      </g>
    </svg>
  );
};

export default Logo;
