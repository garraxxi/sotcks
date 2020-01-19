const host = '127.0.0.1';
const port = 3000;

const server = require('./controller.js');

server.listen(port, host, () => {
  console.log(`Server running at http://${host}/${port}/`);
});
