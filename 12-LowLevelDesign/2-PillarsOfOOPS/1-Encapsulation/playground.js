class Car {
    #make;  // Private Variable: Accessible only within class
    constructor(make, model, year) {
        this.#make = make;
        this.model = model;
        this.year = year;
    }
    
    #injectFuel() {
        console.log(`${this.#make} ${this.model} is injecting fuel`);
    }

    #igniteSparkPlug() {
        console.log(`${this.#make} ${this.model} is adding fire to fuel`);
    }

    start() {
        this.#injectFuel()
        this.#igniteSparkPlug()
        console.log(`${this.#make} ${this.model} is starting`);
    }


    getModel() {
        // Logic
    }

    setModel() {
        // Logic
    }
}

const swift = new Car("Maruti", "Swift", 2024);
swift.start()
// swift.#injectFuel();

// swift.#make = 'Hundai';

// swift.model = "ABC"

const creta = new Car("Hundai", "Creta", 2026);