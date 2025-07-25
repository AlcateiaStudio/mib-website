/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration - only use basePath for subdirectory deployment
  // When using custom domain, these should be empty
  basePath: process.env.USE_BASE_PATH === 'true' ? '/mib-website' : '',
  assetPrefix: process.env.USE_BASE_PATH === 'true' ? '/mib-website/' : '',
};

module.exports = nextConfig;