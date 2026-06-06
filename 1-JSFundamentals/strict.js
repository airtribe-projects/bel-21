'use strict';
let x = 10; 
// Prevents accidental Global Pollution

function test() {
  "use strict";

  x = 10;
}

test()

// Prevents duplicate function parameter
// function sum(a, b, b) {
//     console.log(a + b + b);
// }

// sum(1,5,6)


let public = 10;
