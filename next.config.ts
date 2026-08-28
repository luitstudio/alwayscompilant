import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/contact": ["./scripts/send_contact_email.py"],
  },
};

export default nextConfig;
