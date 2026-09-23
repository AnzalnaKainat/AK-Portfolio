import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D0F16",
          color: "#5FD9A4",
          fontFamily: "monospace",
          fontSize: 16,
          borderRadius: 6,
        }}
      >
        {">_"}
      </div>
    ),
    { ...size }
  );
}
