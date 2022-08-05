const launches = new Map();
const launch = {
  flightNumber: 45,
  mission: 'Kapler Exploraiton X',
  rocket: 'Exporer IS1',
  launchDate: new Date('May 5', 2023),
  destination: 'Kepoer-442',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);
function getAllLaunches() {
  return Array.from(launches.values());
}
module.exports = {
  getAllLaunches,
};
