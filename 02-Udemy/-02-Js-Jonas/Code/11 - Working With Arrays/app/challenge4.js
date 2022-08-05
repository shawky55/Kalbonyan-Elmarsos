//CHAllenge 4

const dogs = [
  { weight: 22, curfood: 250, owners: ['Alice,Bob'] },
  { weight: 8, curfood: 200, owners: ['Matilda'] },
  { weight: 13, curfood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curfood: 340, owners: ['Michael'] },
];

// first task in challenge four
dogs.forEach((dog) => (dog.recommentedFoodPortion = dog.weight ** 0.75 * 28));

//second task in challenge four
let SarahObj = dogs.find((dog) => dog.owners.includes('Sarah'));

SarahObj['curfood'] > SarahObj['recommentedFoodPortion']
  ? console.log('sarah eating too much ')
  : SarahObj['curfood'] == SarahObj['recommentedFoodPortion']
  ? console.log('sarah doge eating okay')
  : console.log('sarah dog eating little');

//third task in challenge four

let etingToomuch = dogs
  .filter((dog) => dog['curfood'] > dog['recommentedFoodPortion'])
  .map((dog) => dog['owners'])
  .flat();

let eatingToolittle = dogs
  .filter((dog) => dog['curfood'] < dog['recommentedFoodPortion'])
  .map((dog) => dog['owners'])
  .flat();
let eatingOkay = dogs.some(
  (dog) =>
    dog['curfood'] > dog['recommentedFoodPortion'] * 0.9 ||
    dog['curfood'] < dog['recommentedFoodPortion'] * 1.1 ||
    dog['curfood'] == dog['recommentedFoodPortion'] * 0.9
);

let exactlyAmount = dogs.some(
  (dog) => dog['curfood'] === dog['recommentedFoodPortion']
);

let dogSorted = dogs
  .slice('')
  .sort(
    (dog1, dog2) => dog1.recommentedFoodPortion - dog2.recommentedFoodPortion
  );

console.log('oweners have dogs eat too much ', etingToomuch);
console.log('oweners have dogs eat too little ', eatingToolittle);
console.log('oweners have dogs eat too okay', eatingOkay);
console.log('oweners have dogs eat exatly amount of food', eatingOkay);
console.log('dog soreted based on food recommented (asceding)', dogSorted);
