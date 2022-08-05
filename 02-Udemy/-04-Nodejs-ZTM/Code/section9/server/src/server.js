const http = require('http');
const app = require('./app');
const PORT = 4000;
const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app);
async function startingServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log('listening server port', PORT);
  });
}

startingServer();
