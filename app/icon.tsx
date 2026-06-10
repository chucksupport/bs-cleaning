import { ImageResponse } from "next/og";

// Text-based favicon generated from the brand colors: a pink "B" on black.
// Chuck can drop a real favicon.ico into app/ later to override this.
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
          backgroundColor: "#000000",
          color: "#ff1493",
          fontSize: 24,
          fontWeight: 800,
          borderRadius: 6,
        }}
      >
        B
      </div>
    ),
    { ...size }
  );
}
