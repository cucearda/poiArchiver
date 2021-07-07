function send(path, data, name)
{
    var Client = require('ftp');
    var fs = require('fs');

    var c = new Client();
    c.on('ready', ()=>{
        c.put(path, name, function(err){
            if (err) throw err;
            c.end;
        });
    });
}