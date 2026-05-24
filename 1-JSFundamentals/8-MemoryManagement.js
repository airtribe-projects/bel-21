/*
Call Stack: 
Heap:

*/
let start = "now";

let startClone = start;
startClone = "end";

console.log(start);
console.log(startClone)

const arr = [1,2];
const clone = arr;
clone[0]= "Hello World";

// console.log(arr, clone);

// Spread operator
const arr = [1,2];
const clone = [...arr];
clone[0]= "Hello World";
console.log(arr, clone);


// Case 3: manually copy the values
// clone = arr.map(v => v);
// value of 3 changes in nestedArray: No
// value of 1 changes in nestedArray: Yes
const nestedArray = [[1,2], 3, [4,5]];

const cloneNestedArray = [...nestedArray];

cloneNestedArray[1] = "ChangedValue";
cloneNestedArray[0][0] = "ChangedValue";

console.log(nestedArray)
console.log(cloneNestedArray)


