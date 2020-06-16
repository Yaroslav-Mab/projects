'use strict';
//top-level копирование объектов

//создание копии циклами 
function copy(mainObj) {
    let objCopy ={};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
        }
        return objCopy;// функция создания копии
}

const numbers = {
    a: 5,
    b: 2,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);//новый объект
console.log(numbers);//старый объект

//.....

const add = {
d:20,
e:17
};
// console.log(Object.assign(numbers, add));

const clone =  (Object.assign({}, add));// другой способ поверхностного копирования(вставка объекта в пустой объект)

clone.e = 19;
console.log(add, clone); 

//...

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
     newArray[1] = 't';
     console.log(newArray, oldArray); // третий метод создания копии (копия массивов)

//...стандарты ES6, ES8

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['espress', 'live', 'bloger'],
      internet = [...video, ...blogs, 'vk'];

      console.log(internet);// ... - оператор разоворота( Spread оператор)

//...

function log(a, b, c) {
    console.log(a, b, c);
}

const num = [2, 5, 7];
log(...num);

//...

const array = ['a', 'b'];
const Aarray = [...array];
console.log(Aarray);

//...

const q = {
    one:1,
    two:2
};

const newObj = {...q};
console.log(newObj);


