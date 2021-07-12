function decrypt(path,target,key)
{
    const fs = require('fs');
    const crypto = require('crypto');
    const algorithm = 'aes-256-cbc';
    
    var enc_buffer = fs.readFileSync(path);
    const iv = enc_buffer.slice(0, 16);
    enc_buffer = enc_buffer.slice(16);
    
    
    const hash = crypto.createHash('md5'); // get 256bit hashed key value
    const hashed = hash.update(key).digest('hex'); 
   
   
    const decipher = crypto.createDecipheriv(algorithm, hashed, iv);  
    const decyrpted = Buffer.concat([decipher.update(enc_buffer), decipher.final()]);

    fs.writeFileSync(target, decyrpted);
}

const target = './decrypt_deneme/dec.txt';
const key = 'key';

decrypt('./decrypt_deneme/input', target, key);