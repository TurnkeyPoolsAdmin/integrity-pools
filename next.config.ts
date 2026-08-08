import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thomaspools.us",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "www.thomaspools.us",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
