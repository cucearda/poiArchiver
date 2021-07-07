function decrypt(path,target,key)
{
    const fs = require('fs');
    const crypto = require('crypto');
    const algorithm = 'aes-256-cbc';
    var enc_buffer = fs.readFileSync(path);
    const iv = enc_buffer.slice(0, 16);
    enc_buffer = enc_buffer.slice(16);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);  
    const decyrpted = Buffer.concat([decipher.update(enc_buffer), decipher.final()]);

    fs.writeFileSync(target, decyrpted);
}

const target = 'dec.txt';
const key = '3f72d6afdc0a79321743c9b927cbc541';

decrypt('encrypted.enc', target, key);