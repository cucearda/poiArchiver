
async function zipper(data, entry_name){
    var Zip = require("adm-zip");
    let zip = new Zip();
    zip.addFile(entry_name, data);
    //zip.writeZip('out.zip')
    let buff = await zip.toBuffer() //????????
    return buff;
}
module.exports = zipper;
