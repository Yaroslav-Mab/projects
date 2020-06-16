'use strict';

const mikky = {
      thinking: 100,
      stupid: 33
};
const leo = Object.create(mikky);


// const leo = { thinking: 300
// };

// Object.setPrototypeOf(leo, mikky);


console.log(leo.stupid);

