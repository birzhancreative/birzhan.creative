import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  outputFileTracingExcludes: {
    '*': [
      'public/**/*',
    ],
  },
};

export default nextConfig;
