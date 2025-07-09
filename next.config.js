const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/made-in-bugs-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/made-in-bugs-website/' : '',
});