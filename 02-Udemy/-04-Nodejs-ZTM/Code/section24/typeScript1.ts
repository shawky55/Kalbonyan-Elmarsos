const sum = (a: number, b: number) => console.log(a + b);
// sum(3, 3);

//Types
let isFound: boolean = true;
let numOffriends: number = 7;
let courseName: string = 'complete nodeJs Developer';

//Array

let cities: string[] = ['cairo', 'alex', 'banha'];

let cities2: Array<string> = ['alex', 'tanta', 'cairo'];

//Object
let car: object = {
  brand: 'merceds',
  model: 2005,
  hasFourDoors: true,
  color: 'black',
};

//Null And Undefined
let noexist: undefined = undefined;
let notexist: null = null;

//Tuple

let characterInfo: [string, number, string, boolean];

characterInfo = ['Ahemed Mahmoud', 42, 'cairo', true];

//Enum
enum size {
  small = 's',
  medium = 'm',
  large = 'L',
  veryLarge = 'XL',
}
let mysize: string = size.veryLarge;

//Any
let anyValue: any = 'this is string';
anyValue = 34;
anyValue = car;
/**
 * any is useful convert js code to typescript code
 *
 */
//Void
/**
 * mean not return value

 */
function subtract(a: number, b: number): void {
  console.log(a - b);
}

//neve

let error = (): never => {
  throw Error('not Found');
};

//InterFace

interface Car {
  color: string;
  charis: number;
  modal: number;
  brand: string;
  convertible: boolean;
}
interface Caculations {
  number1: number;
  number2: number;
}
//it useful in react and passing props
let BmwCheck = (chara: Car) => {};

function sum3(numbers: Caculations) {
  return numbers.number1 + numbers.number2;
}
sum3({ number1: 34, number2: 343 });
interface Num {
  num1: number;
  num2: number;
}

var add = function (num: Num) {
  return console.log(num.num1 + num.num2);
};
add({ num1: 43, num2: 43 });

export {};
