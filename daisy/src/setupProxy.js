const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
<<<<<<< HEAD
    target: '49.234.209.5:8080',
    // target: '49.234.209.5:5000',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    }
  })
=======
      target: 'http://fwdarling2020.cn:8080',
      changeOrigin: true
    })
>>>>>>> master
  )
}
