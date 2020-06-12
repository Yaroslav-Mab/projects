"use strict";
//function declaration
let num = 20;
function showMessage(text, age) {

    console.log(text);

}
showMessage('Hello');
console.log(num);
/////

////
function calc(a, b) {
    return (a*b);
}
console.log(calc(4, 3));
////

//function expression

const logger = function() {

      console.log('hello');

};
      logger();
/////

//Стрелочная функция
const coll = (a, b) => {
console.log('1');
return a + b;
};

////////////////////////////////////////////

const str = 'test';

// console.log(str.length); - кол-во символов в строке

console.log(str.toUpperCase());

//

let fruit = 'Something';

console.log(fruit.indexOf(fruit));//поиск по строке

///

const logg = 'Hello how are u?';

console.log(logg.slice(10, 13));//вырезание символов 
console.log(logg.substring(10, 13));// -/-
console.log(logg.substr(10, 2));// вырезание, вторым число записываес кол-во вырезаемого

const nums = 10.2;
console.log(Math.round(nums));//округление числа до ближайшего

const test = '21.2px';
console.log(parseInt(test));// перевод в другую ситсему счисления(числовой тип данных)
console.log(parseFloat(test));


