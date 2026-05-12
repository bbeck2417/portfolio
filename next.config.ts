import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  // We remove basePath here to prevent Next.js from creating a /portfolio subfolder in /out
  // Instead, we handle the prefixing manually for GitHub Pages compatibility
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
