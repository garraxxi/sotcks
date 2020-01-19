const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  var service = require('./service.js');
  const reqUrl = url.parse(req.url, true);

  // get
  if(reqUrl.pathname == '/stock' && req.method == 'GET') {
    service.stockRequest(req, res);
  }
});
