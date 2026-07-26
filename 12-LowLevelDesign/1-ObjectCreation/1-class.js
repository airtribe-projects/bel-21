// const car = {
//     make: "Toyota", 
//     model: "Camry", 
//     year: 2023, 
//     start: function() {
//         console.log(`${this.make} ${this.model} is starting`);
//     }
// };

// car.start()
// console.log(car.make);

/* Problems? 
    Extensibility: Not extensible, every car needs its own definition
        - Lots of Code Duplication
        - Lacks Uniformity

*/

// Constructor Function Approach
function car(make, model, year) {
    this.make = make;
    this.model= model
    this.year = year;

    this.start =  function() {
        console.log(`${this.make} ${this.model} is starting`);
    }
}


const swift = new car("Maruti", "Swift", 2024);
const creta = new car("Hundai", "Creta", 2026);

swift.start();
swift.make = 'Toyota';
swift.start();

// Enacapsulation: Expose limited capabilities


/* 
Problems?



*/

class Car {
    constructor(make, model, year) {
        this.#make = make;
        this.model= model
        this.year = year;
    }
    
    start() {
        console.log(`${this.make} ${this.model} is starting`);
    }
}

const swift = new Car("Maruti", "Swift", 2024);
const creta = new Car("Hundai", "Creta", 2026);
