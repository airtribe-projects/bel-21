// const student = {
//   name: "Rahul",

//   greet() {
//     console.log(name);
//     console.log(this.name);
//   }
// };

// student.greet();

// const greet = student.greet;

// greet();

// this: refers to an object that is currently calling the function
// Lexical Scope depends on where the function is Written
// this depends on where the function is called
// It also depends on the runtime evironment

// const name = "Global";

// const student = {
//   name: "Rahul",

//   greet() {
//     console.log(name);
//     console.log(this.name);
//   }
// };

// student.greet();

// const greet = student.greet;

// greet();

/* Behaviour of this
Top Level | Browser | Window
Top Level | Node | {}
Top Level function| Browser | Window
Top Level function | Node | Global

Top Level in strict | Browser | Window
Top Level in strict | Node | {}
Top Level function in strict | Browser | undefined
Top Level function in strict | Node | undefined


*/

// function greet() {
//   console.log(this);
// }

// greet();

// console.log(this)


// 'use strict'

// function greet() {
//   console.log(this);
// }

// greet();

// console.log(this);

// const user = {
//     name: "Jay", 

//     greet() {
//         setTimeout(function () {
//             console.log(this.name);
//         }, 1000);
//     }
// }
// // this will be undefined
// user.greet();


// Hack using lexical scope
// const user = {
//     name: "Jay", 

//     greet() {
//         const self = this;
//         setTimeout(function () {
//             console.log(self.name);
//         }, 1000);
//     }
// }

// user.greet();
// Jay printed


// const user = {
//     name: "Jay", 

//     greet() {
        
//         setTimeout(()  => {
//             console.log(this.name);
//         }, 1000);
    
//     }
// }
// // this will be undefined
// user.greet();

// Arrow function abandoned the dynamic model
// it adopted the classical lexical model
// It doesn't have its own this. But it adopts the value of the environment where they were WRITTEN




// Hack using lexical scope
const user = {
    name: "Jay", 

    greet() {
        
        const innerGreet = () => {
            console.log(this);
            console.log(this.name);
        };

        // console.log(this.name);
        
        innerGreet();
    }
}

user.greet();







