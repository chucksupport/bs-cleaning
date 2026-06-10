import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without it, Next.js may infer a
  // parent directory as the root when another lockfile exists higher up
  // (e.g. during local dev under a shared folder).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
