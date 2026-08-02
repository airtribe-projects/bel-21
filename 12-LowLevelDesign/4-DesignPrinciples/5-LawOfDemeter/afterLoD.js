// Rather than supporting a single address. Now the system suports multiple address

class Address {
    constructor(street, city, isCurrent) {
        this.id = Math.random();
        this.street = street;
        this.city = city;
        this.isCurrent = isCurrent; 
    }
    
    getCity() {
        return this.city;
    }

    setCurrent() {
        this.isCurrent = true;
    }
}

// Has - A relationship (Weak)
class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;     // earlier address used to be an instance of address class now it will be an array of address class
    }
    
    setCurrent(id) {
        const currentAddress = this.address.find((add) => add.id === id);
        currentAddress.setCurrent();
    }


    getAddress() {
        return this.address.find((add) => add.isCurrent === true)
    }
}


class Order {
    constructor(customer) {
        this.customer = customer;
    }
    
    printShipingCity() {
        console.log( this.customer.getAddress());
    }
}
