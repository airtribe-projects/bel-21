abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    abstract start():void;

    abstract stop(): void; 
    
    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model}`);
    }

    // stop(): void {
    //     console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    // }
}

class Kar extends Vehicle {

    constructor(make:string, model:string) {
        super(make, model)
    }

    start(): void {
        console.log(`Starting the diesel engine of vehicle: ${this.make} ${this.model}`);
    }

    stop(): void {
        console.log(`Stoping the diesel engine of vehicle: ${this.make} ${this.model}`);
    }
}




// const veh = new Vehicle();


