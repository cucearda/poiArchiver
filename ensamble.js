const CronJob = require('cron').CronJob;
const zipper = require('./modules/zipper');
const encrypter = require('./modules/encrypter');
const moment = require('moment');
const transfer = require('./modules/transfer');
const config = require('config')

const job = new CronJob('0 20 */1 * * *', async () => {

  const now = moment().utcOffset(180);
  const dateString = now.format('YYYY-MM-DD-HH');
  const fileName = 'akasya_' + dateString + 'H.sql';

  //encrypter
  const encryptedBuffer = encrypter('./data/04.12.2021.txt', 'key');
  //zipper
  const zippedBuffer = await zipper(encryptedBuffer, 'data.enc');
  //transfer
  await transfer(zippedBuffer, './site/wwwroot/test/test.zip', config.get('connectionProperties'));
}, null, true, 'Turkey');
job.start();
