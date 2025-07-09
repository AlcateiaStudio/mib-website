/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Will be enabled for production build
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Production configuration for GitHub Pages (disabled for development)
  // basePath: process.env.NODE_ENV === 'production' ? '/made-in-bugs-website' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/made-in-bugs-website/' : '',
};

module.exports = nextConfig;