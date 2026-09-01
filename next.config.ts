import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // All SVGs served through next/image are our own first-party assets
    // under public/assets/img, never user-uploaded, so the sandboxed CSP
    // below is sufficient to allow them through the image optimizer.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
