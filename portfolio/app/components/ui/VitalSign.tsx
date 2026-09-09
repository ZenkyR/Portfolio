import type { ProjectStatus } from "@/app/data/projects";

const CYCLE = 90;
const CYCLES = 8;
const MID = 22;

const rhythms: Record<ProjectStatus, { pulse: string; amplitude: number; tone: string }> = {
  encours: { pulse: "3.2s", amplitude: 1, tone: "text-emerald-300" },
  jouable: { pulse: "3.2s", amplitude: 1, tone: "text-emerald-300" },
  termine: { pulse: "4.6s", amplitude: 0.8, tone: "text-emerald-300/80" },
  prototype: { pulse: "8s", amplitude: 0.45, tone: "text-accent" },
  abandonne: { pulse: "0s", amplitude: 0, tone: "text-rose-300/40" },
};

const beat = (offset: number, amplitude: number) => {
  if (amplitude === 0) return `L${offset + CYCLE},${MID}`;

  const up = MID - 15 * amplitude;
  const down = MID + 9 * amplitude;
  const bump = MID - 4 * amplitude;

  return [
    `L${offset + 30},${MID}`,
    `L${offset + 34},${bump}`,
    `L${offset + 40},${MID}`,
    `L${offset + 46},${down}`,
    `L${offset + 50},${up}`,
    `L${offset + 54},${MID}`,
    `L${offset + CYCLE},${MID}`,
  ].join(" ");
};

const VitalSign = ({ status }: { status: ProjectStatus }) => {
  const { pulse, amplitude, tone } = rhythms[status];
  const path = [
    `M0,${MID}`,
    ...Array.from({ length: CYCLES }, (_, i) => beat(i * CYCLE, amplitude)),
  ].join(" ");

  return (
    <div className="vital" aria-hidden="true">
      <svg
        viewBox={`0 0 ${(CYCLES * CYCLE) / 2} 44`}
        preserveAspectRatio="none"
        className={`vital-track h-11 ${amplitude > 0 ? "vital-beating" : ""} ${tone}`}
        style={{ "--pulse": pulse } as React.CSSProperties}
      >
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default VitalSign;
