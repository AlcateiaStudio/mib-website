/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/mib-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mib-website/' : '',
};

module.exports = nextConfig;