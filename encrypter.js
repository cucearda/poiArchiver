// reads the file in input path to Buffer,
// writes the encrypted data to target
// 3f72d6afdc0a79321743c9b927cbc541 -> test key 16 bytes. 
function encrypt(path, target, key)
{
    const fs = require('fs');
    const crypto = require('crypto');
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    var data_buffer = fs.readFileSync(path);

    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(data_buffer);
    encrypted = Buffer.concat([iv, encrypted, cipher.final()]);

    fs.writeFileSync(target, encrypted);

}

const target = 'encrypted.enc';
const key = '3f72d6afdc0a79321743c9b927cbc541';

encrypt('./data/04.12.2021.txt', target, key);