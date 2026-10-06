import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    // Tailles réellement servies : cartes à 20vw / 34vw / 100vw en 1x–3x.
    deviceSizes: [384, 480, 640, 828, 1080, 1366],
    imageSizes: [64, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

export default nextConfig;
