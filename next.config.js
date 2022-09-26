module.exports = {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/':{page:'/'},
            '/db': { page: '/api/db' },
            '/data': { page: '/api/data' },
          }
    },
  }