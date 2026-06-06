// Basic if

let age = 18;

if (age >= 18) {
  console.log("Adult");
}

// If else

age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if else if

let score = 82;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else {
  console.log("C");
}

let scoreString = "82";

if (score == scoreString) {
    console.log("The look the same")
} else {
    console.log("The are different")
}


if (score === scoreString) {
    console.log("The look the same")
} else {
    console.log("The are different")
}

// Truthy and Falsy

if ("Hello") {
    console.log("Runs");
}


/*
// List of Falsy Values
false
0
""
null
undefined
NaN
*/


// Ternary operator: Short conditional syntax
age = 20;

let result = age >= 18 ? "Adult" : "Minor";


// Switch Case
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown");
}