import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    domains: ['localhost', 'storage.googleapis.com'], // Permite estos dominios
  },
};

export default nextConfig;
