/** @type {import('next').NextConfig} */
const nextConfig = {
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

module.exports = nextConfig;
