class Vehiclee {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model}`);
    }

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }

    drive(): void {
        console.log(`Driving the vehicle: ${this.make} ${this.model}`);   
    }

}


class Plane {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    takeoff() {
        console.log(`Planne is  taking off: ${this.make} ${this.model}`);
    }

    land() {
        console.log(`Planne is  landing: ${this.make} ${this.model}`);
    }

    cruise() {
        console.log(`Planne is cruising: ${this.make} ${this.model}`);

    }
}


interface IVehicle {
    make: string;
    model: string;
    start(): void;
    stop(): void;
    drive(): void;
}


interface IPlane {
    takeoff(): void;
    cruise(): void;
    land(): void;
}

interface xyz extends IPlane, IVehicle {

}

class Carr implements IVehicle, IPlane {
    make: string;
    model: string;
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
}
/* 
Q. Can we instantiate an abstract class? No

Q. Can an interface have implementation? No

Q. Can an abstract class have properties? Yes

Q. Can an interface have properties? Yes

Q. Can an abstract class implement an interface? Yes

Q. Can an interface extend another interface? Yes

Q. Can an abstract class extend another abstract class? Yes

Q. Can an interface extend an abstract class? No

