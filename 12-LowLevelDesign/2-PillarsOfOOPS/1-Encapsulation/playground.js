class Car {
    #make;
    constructor(make, model, year) {
        this.#make = make;
        this.model= model
        this.year = year;
    }
    
    start() {
        console.log(`${this.#make} ${this.model} is starting`);
    }
}

const swift = new Car("Maruti", "Swift", 2024);
swift.start()
swift.#make = 'Hundai';

const creta = new Car("Hundai", "Creta", 2026);