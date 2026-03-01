import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.noroff.dev',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
