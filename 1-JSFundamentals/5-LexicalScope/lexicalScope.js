// function outer() {
//   let name = "Rahul";

//   function inner() {
//     console.log(name);
//   }

//   inner();
// }

// outer();


// function outer() {
//   let secret = "Hidden";

//   function inner() {
//     console.log(secret);
//   }

//   inner();
// }

// outer()

// console.log(secret);



function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const fn = outer();

fn();
fn();
fn();
