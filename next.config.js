const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

module.exports = withNextIntl({
  // output: 'export', // Commented out for development mode
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Static export configuration for GitHub Pages (disabled for development)
  // basePath: process.env.NODE_ENV === 'production' ? '/made-in-bugs-website' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/made-in-bugs-website/' : '',
  
  // Ensure locales are properly handled
  experimental: {
    // appDir: true, // This is now default in Next.js 13+
  }
});