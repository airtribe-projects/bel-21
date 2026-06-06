/* Loops: Performs a work repeatedly
    For loop
    while loop
    for of loop
    nested loops
    infinite loops
*/

// For Loop

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While Loop

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}



// For of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// Break --> stop the loop
// continue --> Skips current Iteration


for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}


for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}

