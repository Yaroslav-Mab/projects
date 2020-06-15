'use strict';

function first (lang, callback) {
console.log(`I learn: ${lang}`);
callback();
}

first('JS', function() {
    console.log('I learning');
});