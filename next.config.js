const path = require('path')

module.exports = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },

  env: {
    PUBLIC_URL: "https://suhailyazdan.github.io/next-react-bootstrap",
    assetPrefix: './'
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/completed-projects': { page: '/completed-projects' },
      '/contact-us': { page: '/contact-us' },
      '/ongoing-projects': { page: '/ongoing-projects' },
    }
  },
}
