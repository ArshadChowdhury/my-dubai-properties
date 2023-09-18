/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.offplan-dubai.com",
      "cloud.offplan-dubai.com",
      "propertyseeker.s3.me-central-1.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.offplan-dubai.com",
      },
    ],
  },
};

module.exports = nextConfig;
