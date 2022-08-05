const httpsModule = require('https');

const request = httpsModule.request(
  'https://www.google.com',
  (response) => {
    response.on('data', (chunk) => {
      console.log(chunk);
    });
    response.on('end', () => {
      console.log('operation end');
    });
  }
);
request.end();
