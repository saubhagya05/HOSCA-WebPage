import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
   domains: ['img.youtube.com', 'res.cloudinary.com', 'avatars.githubusercontent.com'],
   formats: ['image/avif', 'image/webp'],
   minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
