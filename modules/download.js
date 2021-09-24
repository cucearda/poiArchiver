var Client = require('ftp');
var fs = require('fs');

var c = new Client();

const downloadPromise = (localName, targetAdress, connectionProperties) => {
  return new Promise((resolve, reject) => {
    c.on('ready', function () {
      c.get(targetAdress, function (err, stream) {
        if (err) {
          console.log('ftp error');
          return reject(err);
        }

        else{
          stream.once('close', function () { c.end(); }); // close the connection
          stream.pipe(fs.createWriteStream(localName)); // write stream to local
          return resolve();
        }
      });
    });    
    c.connect(connectionProperties);
  })
}

downloadPromise('local-copy.zip', './site/test/test.zip', connectionProperties);