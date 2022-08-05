let juliaDogs = [10, 5, 6, 1, 4];
let kateDogs = [3, 5, 2, 12, 7];
function checkDogs(juliaDogs, kateDogs) {
  let correctJulaDogs = juliaDogs.slice(1, -2);
  let allDogs = [...correctJulaDogs, ...kateDogs];
  allDogs.forEach((dog, indx) => {
    if (dog >= 3) {
      console.log(
        `Dog number ${indx + 1} is adult,and it has ${dog} years old`
      );
    } else {
      console.log(
        `Dog number ${indx + 1} is poppy,and it has ${dog} years old`
      );
    }
  });
}
checkDogs(juliaDogs, kateDogs);
///////////////////////////

//CHALLENGE ONE with CHAINING METHOD AND ARROW FUNCTION

const checkDogs2 = (juliaDogs, kateDogs) => {
  juliaDogs
    .slice(1, -2)
    .concat(kateDogs)
    .forEach((dog, indx) =>
      dog >= 3
        ? console.log(
            `Dog number ${indx + 1} is adult,and it has ${dog} years old`
          )
        : console.log(
            `Dog number ${indx + 1} is poppy,and it has ${dog} years old`
          )
    );
};
checkDogs2(juliaDogs, kateDogs);
