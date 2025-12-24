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
  async redirects() {
    return [
      {
        source: '/blog/urban-flooding-smart-cities-climmaech',
        destination: '/',
        permanent: true, 
      },
    ]
  },
};




module.exports = nextConfig