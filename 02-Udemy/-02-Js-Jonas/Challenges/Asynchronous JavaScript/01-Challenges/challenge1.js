function WhereIamI(latitude, longitude) {
  fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(response => response.json())
    .then(response => {
      if (!response.country) {
        throw Error('there no country with this coords');
      }
      console.log(response.country);
      getCountryPromise(response.country);
    })
    .catch(err => {
      console.log(err.message);
    });
}

WhereIamI(30.033333, 31.233334);
