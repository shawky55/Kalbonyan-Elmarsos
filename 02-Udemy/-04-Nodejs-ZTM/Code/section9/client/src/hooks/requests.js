const URl = 'http://localhost:4000';
async function httpGetPlanets() {
  const res = await fetch(`${URl}/planets`);
  const data = res.json();
  return data;
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${URl}/launches`);
  const fetchedLaunches = await response.json();

  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
