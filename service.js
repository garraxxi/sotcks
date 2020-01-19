const url = require('url');
const https = require('https');
const logFile = require('./log.js');

const token = 'pk_3680a8a7de304b4cb48822f9ff778711';

exports.stockRequest = function(req, res) {
  const reqUrl = url.parse(req.url, true);
  logFile.attachFSLogger('./logs.txt');
  var name = '';
  var option = '';
  if (reqUrl.query.name) {
    name = reqUrl.query.name
    option = reqUrl.query.option
  }
  getData(name, option, res);
}

function getData(name, option, res) {
  let data = '';
  let url = `https://cloud.iexapis.com/stable/stock/${name}/${option}`;
  url += option == 'news' ? '/last/1' : '';
  url += `?token=${token}`;
  https.get(url, (resp) => {
    data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(`Success: ${url}, ${formatDate()}`);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'appication/json');
      res.end(data);
    });
  }).on("error", (err) => {
    console.log(`Error:  ${err.message}, ${url}, ${formatDate()}`);
  });
}

function formatDate() {
  const today = Date();
  let fullDate = today.toString().split(' ');
  let month = '';
  switch (fullDate[1]) {
    case 'Jan':
      month = '01';
      break;
    case 'Feb':
      month = '02';
      break;
    case 'Mar':
      month = '03';
      break;
    case 'Apr':
      month = '04';
      break;
    case 'May':
      month = '05';
      break;
    case 'Jun':
      month = '06';
      break;
    case 'Jul':
      month = '07';
      break;
    case 'Aug':
      month = '08';
      break;
    case 'Sep':
      month = '09';
      break;
    case 'Oct':
      month = '10';
      break;
    case 'nov':
      month = '11';
      break;
    default:
      month = '12'
      break;
  }
  var date = `${fullDate[3].substring(2, 4)}/${month}/${fullDate[2]}`;
  var time = fullDate[4]
  return `${date} ${time}`;
}
