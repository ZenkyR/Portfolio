import { ImageResponse } from "next/og";
import { ogSubtitle, person } from "@/app/config/site";

export const alt = `${person.name} — ${person.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const Image = () =>
  new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#070510",
          backgroundImage:
            "radial-gradient(circle at 18% 12%, #6d28d9 0%, transparent 42%), radial-gradient(circle at 88% 88%, #a855f7 0%, transparent 45%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontFamily: "monospace",
            letterSpacing: "0.18em",
            color: "#c084fc",
            textTransform: "uppercase",
          }}
        >
          {person.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 700,
            color: "#f4f4f5",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          {person.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#a1a1aa",
            marginTop: 32,
            maxWidth: 820,
          }}
        >
          {ogSubtitle}
        </div>
      </div>
    ),
    size,
  );

export default Image;
