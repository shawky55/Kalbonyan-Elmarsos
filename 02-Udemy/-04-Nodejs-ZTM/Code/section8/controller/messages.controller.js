const path = require('path');

function getMessages(request, response) {
  const PATH = path.join(__dirname, '..', 'public', 'skimountain.jpg');
  // response.send('<ul><li>HeLLo users!</li></ul>');
  response.sendFile(PATH);
}
function postMessage(response, request) {
  console.log('Updating messages ....');
}

module.exports = {
  getMessages,
  postMessage,
};
