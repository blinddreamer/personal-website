const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.hetrixtools.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1/e1546211de0f332ec510d8a85c9461e2/uptime/monitors/0/30/',
      },
    })
  );
};
