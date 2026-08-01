class PaymentMethod {
    processPayment(amount) {
        throw new Error("processPayment method should be implemented");
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process credit card payment
        console.log("Processing credit card payment of amount:", amount);
    }
}

class DebitCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process debit card payment
        console.log("Processing debit card payment of amount:", amount);
    }
}

class BitcoinPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process bitcoin payment
        console.log("Processing bitcoin payment of amount:", amount);
    }
}

class UPIPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process bitcoin payment
        console.log("Processing bitcoin payment of amount:", amount);
    }
}

// Doesn't follow LSP
class FreePayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process bitcoin payment
        throw new Error("This doesn't need a call the Payment Gateway");
    }
}



class PaymentServiceLSP {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount) {
        this.paymentMethod.processPayment(amount);
    }
}


// Main Code

const creditCardPayment = new CreditCardPayment();
const freePayment = new FreePayment();

// Break
const paymentService = new PaymentServiceLSP(freePayment);
paymentService.deductAmount(1000);


