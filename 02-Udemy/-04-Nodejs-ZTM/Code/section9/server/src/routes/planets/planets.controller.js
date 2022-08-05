const { getAllPlanets } = require('../../models/planets.model.js');

function httpGetAllPlanets(reqeust, response) {
  return response.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
