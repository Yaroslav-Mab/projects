'use strict';

let num = 50;

while (num < 55){
    console.log(num);//,бесконечная команда
    num++;//инкримент на +1
}
////////////////////

let numb = 50;
do {
    console.log(numb);//,бесконечная команда
    numb++;//инкримент на +1
}
while (numb<55);

////////////////

for (let i = 1; i < 8 ; i++){
    if (i === 6) {
        break;
    }
    
    console.log(i);
}