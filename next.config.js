/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        hostname: 'indiehackerstory.com',
      },
      {
        hostname: 'adventurous-porpoise-471.convex.cloud',
      },
      {
        hostname: 'beaming-parakeet-666.convex.cloud',
      },
    ],
  },
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
