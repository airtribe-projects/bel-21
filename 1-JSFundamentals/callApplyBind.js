// const user = {
//     name: "Jay", 
//     city: "Bangalore",
//     greet: function(country, pincode) {
//         console.log(`Hi, I am ${this.name} from ${this.city}, ${country}, PIN ${pincode}`);   
//     }
// }

// user.greet("India");

// const welcome = user.greet;

// welcome("India");

// const person = {
//     name: 'Sridar', 
//     city: "Noida"
// }

// welcome.call(person);
// welcome.call(person, "India");
// welcome.call(person, "India", "201301");

// welcome.apply(person);
// welcome.apply(person, ["India", "201301"]);


/* Bind
It attaches the function to the object but doesn't invoke it

*/

// const user = {
//     name: "Jay", 
//     city: "Bangalore",
//     greet: function() {
//         console.log(`Hi, I am ${this.name} from ${this.city}`);   
//     }
// }


// setTimeout(user.greet.bind(user), 1000);

// const person = {
//     name: 'Sridar', 
//     city: "Noida"
// }

const obj = {
  name: "Jay"
};

const arrow = () => {
  console.log(this)
  console.log(this.name);
};

arrow.bind(obj);

arrow();

