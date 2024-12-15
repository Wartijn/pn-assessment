import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "cdn-pika-production-cdn-bucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/cms/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
