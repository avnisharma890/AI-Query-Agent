import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/ask",
        destination: "http://localhost:5000/ask", // backend port
      },
    ];
  },
};

export default nextConfig;
