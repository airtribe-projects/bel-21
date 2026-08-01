interface Engine {
    start(): void;
}

class PetrolEngineDIP implements Engine {
    start() {
        console.log("Petrol engine started");
    }
}

class CNGEngine implements Engine {
    start() {
        console.log("CNG engine started");
    }
}

class DieselEngine implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}


class CarDIP {
    private engine: Engine;
    constructor(engine: Engine) {
        this.engine = engine;
    }
    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}


// Dependency Inversion is achieved by Dependency Injection


let petrolEngine = new PetrolEngine();
let merc: Car =  new Car(PetrolEngine)