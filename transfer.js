
function transfer(data, destination)
{
    var Client = require('ftp');

    var c = new Client();
    c.on('error',console.dir);
    var connectionProperties = {
        host: "waws-prod-db3-083.ftp.azurewebsites.windows.net",
        user: "pl-website",
        password: "55hweHHteAceqs29qtnoWQLXyBwvggzGol9JN8aMoggcBGHbLavCJMynXD3M",
        protocol: "ftps"
    };
    
    c.on('ready', function() {
        c.put(data, destination, function(err){
            if (err) throw err;
            c.end();
            });
        });
    
    c.connect(connectionProperties);
}

module.exports = transfer;
