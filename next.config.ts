import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'public/**/*',
      ],
    },
  },
};

export default nextConfig;
