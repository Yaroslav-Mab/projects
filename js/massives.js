'use strict';

const arr = [1, 2, 3, 5, 7];
arr.sort(compare);//сортировка 
console.log(arr);

function compare (a, b) {
    return a -b;
}

for (let i=0; i<arr.length; i++) {
console.log(arr[i]);
}//перебор циклом 

for (let vars of arr) {
    console.log(vars);
}//перебор for off


arr.pop();//удаление числа из конца массива
arr.push(10);//добавление числа к массиву в конец

console.log(arr);

const zarr = [1, 2, 3, 5, 7];

zarr.forEach(function(nums, i, zarr){
    console.log(`${nums}:${i} внутри массива ${zarr}`);
});//перебор for each

/////

const str = prompt("", "");
const products = str.split(", ");//перебор в массив
console.log(products.join('; '));//склеивание из массива

