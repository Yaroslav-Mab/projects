'use strcit';

const options = {
    name:'test',
    width:1024,
    height:1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {// функция в объектах
        console.log("Test");
    }
};
options.makeTest();
// console.log(options.name);

// delete options.name;// удаление свойства

// console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Svoistvo ${i} znachit ${options[key] [i]}`);
        }
        } else { console.log(`Svoistvo ${key} znachit ${options[key]}`);
        }
    }

///////
const juno = {
    name: 'Kinder',
    age: 4,
    school: 12,
    hobby: 'painting'
};
 
console.log(Object.keys(juno).length);
////