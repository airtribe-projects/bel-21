const {add} = require('./sample');

// Describes defines the test suite
describe("Test addition of 2 numbers", () => {

    test("Should add 2 positive numbers", () => {
        const response = add(5,2);
        expect(response).toBe(7);
    })


    test("Should add 2 float numbers", () => {
        const response = add(5.5,2.9);
        expect(response).toBe(8.4);
    })

    test("Should add 2 negative numbers", () => {
        const response = add(-3,-5);
        expect(response).toBe(-8);
    })


    test("Should just add numbers", () => {
        const response = add(1,"jay");
        expect(response).toBe(null);
    })


    test("Should accept exactly 2 parameters", () => {
        const response = add(1);
        expect(response).toBe(null);
    })


})