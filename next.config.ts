import type { NextConfig } from "next";

const repo = "your-beauty-ptbo-preview";
const isGhPages = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repo}` : "",
  },
  ...(isGhPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
};

export default nextConfig;
