// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "em-portfolio"; // <-- change if your repo name is different

const nextConfig: NextConfig = {
  output: "export",                 // enables `next export`
  images: { unoptimized: true },    // no next/image optimizer on Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
