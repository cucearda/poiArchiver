
const Client = require('ftp');
const c = new Client();
c.on('error', console.dir);

const transferPromise = (data, destination, connectionProperties) => {
    return new Promise((resolve, reject) => {
        c.on('ready', () => {
            c.put(data, destination, err => {
                if (err) {
                    console.log('error');
                    reject(err);
                }

                else {
                    console.log('Here');
                    resolve('It worked!');
                }
            })
        })
        c.connect(connectionProperties);
    })
}

// function transfer(data, destination, connectionProperties)
// {
//     c.on('ready', () =>{
//         c.put(data, destination, (err) =>{
//             if (err) throw err;
//             c.end();
//         });
//     });

//     c.connect(connectionProperties);
// }

module.exports = transferPromise;
