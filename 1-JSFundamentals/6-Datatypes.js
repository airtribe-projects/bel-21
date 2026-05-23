/*
    Two Major Datatypes
    - Primitive
        - Simmple values, immutable, compared by value
        - Number
        - String
        - Boolean
        - undefined
        - Null
        - Symbol
        - BigInt
    - Reference
*/

// Ex: 

let x;
console.log(x)
x = null;
console.log(x);

// Symbol is an inherent mechanism in JS which provides unique value everytime
/*

Comment on symbol
- A Symbol is a primitive data type (introduced in ES6) that is used to create unique and immutable identifiers.
- A symbol represents a value that is guaranteed to be unique, even if multiple symbols are created with the same description.
- A Symbol is best understood as a collision-proof identifier used for advanced object modeling, internal metadata, and language-level customization. 
- It is not intended for general-purpose data storage, but for structural and semantic guarantees in JavaScript systems.


*/
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2)
console.log(id1 === id2)
console.log(id1, id2)



// How do we know what is the data type of my variable? 

console.log(typeof id1)

let udf;
console.log(typeof 1)
console.log(typeof "Jay")
console.log(typeof udf)


// Edge case
console.log(typeof null);



