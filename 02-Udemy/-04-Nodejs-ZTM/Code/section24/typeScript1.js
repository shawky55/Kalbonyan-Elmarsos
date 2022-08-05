"use strict";
exports.__esModule = true;
var sum = function (a, b) { return console.log(a + b); };
// sum(3, 3);
//Types
var isFound = true;
var numOffriends = 7;
var courseName = 'complete nodeJs Developer';
//Array
var cities = ['cairo', 'alex', 'banha'];
var cities2 = ['alex', 'tanta', 'cairo'];
//Object
var car = {
    brand: 'merceds',
    model: 2005,
    hasFourDoors: true,
    color: 'black'
};
//Null And Undefined
var noexist = undefined;
var notexist = null;
//Tuple
var characterInfo;
characterInfo = ['Ahemed Mahmoud', 42, 'cairo', true];
//Enum
var size;
(function (size) {
    size["small"] = "s";
    size["medium"] = "m";
    size["large"] = "L";
    size["veryLarge"] = "XL";
})(size || (size = {}));
var mysize = size.veryLarge;
//Any
var anyValue = 'this is string';
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
function subtract(a, b) {
    console.log(a - b);
}
//neve
var error = function () {
    throw Error('not Found');
};
//it useful in react and passing props
var BmwCheck = function (chara) { };
function sum3(numbers) {
    return numbers.number1 + numbers.number2;
}
sum3({ number1: 34, number2: 343 });
var add = function (num) {
    return console.log(num.num1 + num.num2);
};
add({ num1: 43, num2: 43 });
