import type { ReactElement } from "react";

// Shared 1200x630 social-card artwork used by both opengraph-image and
// twitter-image. Pure inline styles (ImageResponse only supports flexbox + a
// CSS subset), brand colors hard-coded since CSS variables aren't available here.
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function OgImage(): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#000000",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#ff1493",
          marginBottom: 24,
        }}
      >
        Pressure Washing Services
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: 96,
          fontWeight: 800,
          lineHeight: 1.05,
          color: "#ffffff",
        }}
      >
        <span style={{ color: "#ff1493" }}>B&apos;s&nbsp;</span>
        Trash Bin Cleaning
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontSize: 36,
          color: "#a3a3a3",
        }}
      >
        Trash bin cleaning &amp; pressure washing in Ohio
      </div>
    </div>
  );
}
