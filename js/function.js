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
