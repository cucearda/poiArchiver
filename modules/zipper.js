var Zip = require('adm-zip');
let zip = new Zip();

async function zipper(data, entry_name) {

    zip.addFile(entry_name, data);
    let buff = zip.toBuffer()
    return buff;
}
module.exports = zipper;
