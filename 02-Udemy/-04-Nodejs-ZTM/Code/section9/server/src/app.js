const express = require('express');
const morgan = require('morgan');

const app = express();
const path = require('path');
const cors = require('cors');

const { planetsRouter } = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(planetsRouter);
app.use(launchesRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports = app;
