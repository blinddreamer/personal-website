const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // The endpoint you want to proxy (change this to match your API's endpoint)
    createProxyMiddleware({
      target: 'https://api.hetrixtools.com', // The URL of your API server
      changeOrigin: true, // This option allows changes to the "Origin" header, necessary for CORS
    })
  );
};


//https://api.hetrixtools.com/v1/e1546211de0f332ec510d8a85c9461e2/uptime/monitors/0/30/