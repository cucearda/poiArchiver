var Client = require('ftp');
var fs = require('fs');

var connectionProperties = {
  host: "waws-prod-db3-083.ftp.azurewebsites.windows.net",
  user: "pl-website",
  password: "55hweHHteAceqs29qtnoWQLXyBwvggzGol9JN8aMoggcBGHbLavCJMynXD3M",
  protocol: "ftps"
};

var c = new Client();
c.on('ready', function () {
  c.get('./site/test/test.zip', function (err, stream) {
    if (err) throw err;
    stream.once('close', function () { c.end(); });
    stream.pipe(fs.createWriteStream('local-copy.zip'));
  });
});
// connect to localhost:21 as anonymous
c.connect(connectionProperties);