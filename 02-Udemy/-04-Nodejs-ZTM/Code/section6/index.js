const { parse } = require('csv-parse');
const fs = require('fs');
const result = [];
const habitablePlanets = [];
const checkHabitable = (planetData) => {
  return (
    planetData['koi_disposition'] === 'CONFIRMED' &&
    planetData['koi_insol'] > 0.36 &&
    planetData['koi_insol'] < 1.11 &&
    planetData['koi_prad'] < 1.6
  );
};
fs.createReadStream('kepler_data.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data) => {
    result.push(data);
    if (checkHabitable(data)) {
      habitablePlanets.push(data);
    }
  })
  .on('error', (error) => {
    console.log(error.message);
  })
  .on('end', () => {
    console.log('process complete');
    // console.dir(result);
    console.log('Number of habitable planet', habitablePlanets.length);
    console.log('planets name');
    habitablePlanets.forEach((planet) => {
      console.log(planet['kepler_name']);
    });
  });
