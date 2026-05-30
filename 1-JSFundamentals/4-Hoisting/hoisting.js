// console.log(x);

// let x = 10;


// Scope
// School has Global Scope
let school = "ABC";

function greet() {
    let message = "Hello";
    console.log(school, message);
}

// console.log(message);

// greet();


// Block Scope
{
    let age = 15
    // console.log(age);
}
// Reference Error
// console.log(age);

// ------------------------------

{
    var age = 15
    // console.log(age);
}
// var doesn't have block scope, it has global scope
console.log(age);
