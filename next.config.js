/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Skip type checking
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
