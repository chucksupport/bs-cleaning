import { ImageResponse } from "next/og";

import { OgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "B's Trash Bin Cleaning — Trash bin cleaning & pressure washing in Ohio";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return new ImageResponse(<OgImage />, { ...size });
}
