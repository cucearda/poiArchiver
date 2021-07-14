// reads the file in input path to Buffer,
// writes the encrypted data to target
const fs = require('fs');
const crypto = require('crypto');
const hash = crypto.createHash('md5');     // get 256bit hashed key value

function encrypt(path, key) // gets file path and key, returns files data encrypted in a buffer
{
    const hashed = hash.update(key).digest('hex');

    const iv = crypto.randomBytes(16);
    let data_buffer = fs.readFileSync(path);

    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(hashed), iv);
    let encrypted = cipher.update(data_buffer);
    encrypted = Buffer.concat([iv, encrypted, cipher.final()]);

    return encrypted;
}
module.exports = encrypt;