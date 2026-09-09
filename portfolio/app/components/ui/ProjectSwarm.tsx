"use client";

import { useEffect, useRef, useState } from "react";
import ArrowUpRight from "@/app/components/ui/ArrowUpRight";
import VitalSign from "@/app/components/ui/VitalSign";
import { projects, statusLabel, type ProjectThumb } from "@/app/data/projects";

const spots = [
  { x: 20, y: 22, hue: 280 },
  { x: 66, y: 16, hue: 315 },
  { x: 85, y: 46, hue: 190 },
  { x: 45, y: 44, hue: 45 },
  { x: 14, y: 64, hue: 340 },
  { x: 72, y: 78, hue: 265 },
  { x: 32, y: 88, hue: 155 },
];

const DODGE_RADIUS = 150;
const DODGE_PUSH = 90;

const roam = (index: number) => ({
  "--wx": `${(index % 2 ? 1 : -1) * (52 + (index % 3) * 22)}px`,
  "--wy": `${(index % 3 ? -1 : 1) * (38 + (index % 4) * 18)}px`,
  "--roam": `${6.5 + (index % 5) * 1.4}s`,
  "--roam-delay": `-${index * 1.6}s`,
  "--blink": `${4 + (index % 4) * 1.7}s`,
});

const ProjectSwarm = ({
  thumbs,
}: {
  thumbs: Record<ProjectThumb, () => React.JSX.Element>;
}) => {
  const [touched, setTouched] = useState<number | null>(null);
  const [reformed, setReformed] = useState(false);
  const arena = useRef<HTMLDivElement>(null);
  const slots = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (touched === null) return;
    const timer = setTimeout(() => setReformed(true), 420);
    return () => clearTimeout(timer);
  }, [touched]);

  useEffect(() => {
    const box = arena.current;
    if (!box) return;

    let frame = 0;

    const dodge = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = box.getBoundingClientRect();

        slots.current.forEach((slot) => {
          if (!slot) return;
          const spot = slot.getBoundingClientRect();
          const dx = spot.left + spot.width / 2 - event.clientX;
          const dy = spot.top + spot.height / 2 - event.clientY;
          const distance = Math.hypot(dx, dy);

          if (distance > DODGE_RADIUS || distance === 0) {
            slot.style.setProperty("--dodge-x", "0px");
            slot.style.setProperty("--dodge-y", "0px");
            return;
          }

          const force = (1 - distance / DODGE_RADIUS) ** 2 * DODGE_PUSH;
          slot.style.setProperty("--dodge-x", `${(dx / distance) * force}px`);
          slot.style.setProperty("--dodge-y", `${(dy / distance) * force}px`);
        });

        if (event.clientY < bounds.top || event.clientY > bounds.bottom) {
          slots.current.forEach((slot) => {
            slot?.style.setProperty("--dodge-x", "0px");
            slot?.style.setProperty("--dodge-y", "0px");
          });
        }
      });
    };

    const calm = () =>
      slots.current.forEach((slot) => {
        slot?.style.setProperty("--dodge-x", "0px");
        slot?.style.setProperty("--dodge-y", "0px");
      });

    window.addEventListener("pointermove", dodge, { passive: true });
    box.addEventListener("pointerleave", calm);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", dodge);
      box.removeEventListener("pointerleave", calm);
    };
  }, []);

  const flight = (index: number, target: number) => {
    if (index === target) return {};
    const dx = spots[index].x - spots[target].x;
    const dy = spots[index].y - spots[target].y;
    const length = Math.hypot(dx, dy) || 1;
    return {
      "--flee-x": `${(dx / length) * 150}px`,
      "--flee-y": `${(dy / length) * 110}px`,
    };
  };

  const project = touched === null ? null : projects[touched];
  const Thumb = project ? thumbs[project.thumb] : null;
  const hue = touched === null ? 280 : spots[touched].hue;
  const dead = project?.status === "abandonne";

  return (
    <div
      ref={arena}
      className={`swarm relative w-full ${
        touched === null ? "h-[26rem] sm:h-[32rem]" : "sm:h-[36rem]"
      }`}
    >
      {projects.map((candidate, index) => {
        const numb = candidate.status === "abandonne";
        const blown = touched === index;
        const fleeing = touched !== null && !blown;

        return (
          <div
            key={candidate.name}
            className="critter-slot"
            style={
              {
                "--x": `${spots[index].x}%`,
                top: `${spots[index].y}%`,
                "--hue": spots[index].hue,
                ...(touched !== null ? flight(index, touched) : {}),
              } as unknown as React.CSSProperties
            }
          >
            {blown && <span aria-hidden="true" className="shockwave" />}

            <div
              ref={(node) => {
                slots.current[index] = node;
              }}
              className="critter-dodge"
            >
            <button
              type="button"
              onClick={() => setTouched(index)}
              tabIndex={touched === null ? 0 : -1}
              aria-hidden={touched !== null}
              style={roam(index) as React.CSSProperties}
              className={`critter ${numb ? "is-numb" : ""} ${blown ? "is-blown" : ""} ${
                fleeing ? "is-scared" : ""
              }`}
            >
              <span aria-hidden="true" className="critter-body">
                <span className="critter-eye" />
                <span className="critter-eye" />
              </span>
              <span className="critter-name">{candidate.name}</span>
            </button>
            </div>
          </div>
        );
      })}

      {project && Thumb && (
        <div
          className={`critter-card ${reformed ? "is-reformed" : ""}`}
          style={{ "--hue": hue } as unknown as React.CSSProperties}
        >
          <span aria-hidden="true" className="critter-watch">
            <span />
            <span />
          </span>

          <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
            <div
              aria-hidden="true"
              className={`critter-portrait ${dead ? "opacity-30 grayscale" : ""}`}
            >
              <Thumb />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.name}
                </h3>
                <span className="critter-badge">{statusLabel(project)}</span>
              </div>

              <p className="text-paper/90 text-balance">{project.summary}</p>

              <div aria-hidden="true" className="my-5 overflow-hidden rounded-lg bg-black/30">
                <VitalSign status={project.status} />
              </div>

              <p className="text-sm leading-relaxed text-muted">{project.detail}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="critter-tag">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-4 pt-4">
                {project.links?.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm text-paper/80 transition-colors hover:text-accent"
                  >
                    {label}
                    <ArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ))}

                <button type="button" onClick={() => setTouched(null)} className="critter-release">
                  Les relâcher
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSwarm;
