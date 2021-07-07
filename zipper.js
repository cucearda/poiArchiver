
function zipper(path, outName){
    var Zip = require("adm-zip");
    let zip = new Zip();
    zip.addLocalFile(path);
    zip.writeZip(outName);
}
module.exports = zipper;
