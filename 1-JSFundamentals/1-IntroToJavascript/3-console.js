/*
console.log() is a way to print info to terminals


*/

const hello = "world"
console.log("Jay Chakra");
console.log("1");
console.log(hello);
console.log("Hello ", "World!", hello)
console.log(`Hello world! ${hello}`)

// console.warn, console.error


// Console.table
const users = [
  { name: "Jay", age: 20 },
  { name: "Sam", age: 25 }
];

console.table(users);


// console.time

console.time("loop");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("loop");



