import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // We keep basePath empty here to ensure the /out folder has a flat structure
  // that matches the root of your GitHub repository.
  // We handle the /portfolio prefix manually in our code using getAssetPath.
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
