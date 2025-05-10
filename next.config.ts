import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    domains: ['localhost', 'firebasestorage.googleapis.com'], // Permite estos dominios
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '9199', // especifica el puerto si es necesario
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
