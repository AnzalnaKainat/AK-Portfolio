import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0D0F16",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,158,255,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(95,217,164,0.18), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#5FD9A4",
            fontFamily: "monospace",
          }}
        >
          <span>{">_"}</span>
          <span>anzalna.dev</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 72,
            fontWeight: 700,
            color: "#F5F6F8",
            lineHeight: 1.15,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 32,
            color: "#9EA5BC",
          }}
        >
          {siteConfig.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
