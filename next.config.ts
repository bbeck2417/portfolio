import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  env: {
    // Expose the base path to the client/server components
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
