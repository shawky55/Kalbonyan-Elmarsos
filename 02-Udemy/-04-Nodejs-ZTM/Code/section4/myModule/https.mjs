import * as request from './internals/send.mjs';

// import { read } from './internals/response.mjs';
function makeRequest(url, data) {
  request.send(url, data);
  request.read();
}

makeRequest('www.google.com', '');
