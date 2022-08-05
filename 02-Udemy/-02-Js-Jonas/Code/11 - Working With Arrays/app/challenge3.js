let dogsAge = [5, 2, 4, 1, 15, 8, 4];
/**CHALLENGE THree With Chaining method  */
function CHALLENGE_2Chaining(ages) {
  return ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce(
      (accumaltor, currnentValue, indx, arr) =>
        accumaltor + currnentValue / arr.length,
      0
    );
}

console.log('average ', CHALLENGE_2Chaining(dogsAge));

///////////////////////////
