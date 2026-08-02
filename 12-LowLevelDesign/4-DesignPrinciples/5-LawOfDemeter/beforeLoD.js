class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
    getCity() {
        return this.city;
    }
}

// Has - A relationship (Weak)
class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    
    
    getAddress() {
        return this.address;
    }
}


class Order {
    constructor(customer) {
        this.customer = customer;
    }
    
    printShipingCity() {
        console.log( this.customer.address.city);
    }
}
