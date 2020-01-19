const fs = require('fs');

exports.attachFSLogger = function(filePath) {
  const oldLog = console.log;

  // create a write stream for the given file path
  const fsLog = fs.createWriteStream(filePath, {
    flags: 'a' // append
  })

  console.log = (...messages) => {

    // log the console message immediately as usual
    oldLog.apply(console, messages);
    fsLog.write(messages.join('\n'));
  }
}
