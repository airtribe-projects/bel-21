/*
- Function which returns a function
- or takes a function as a parameter is called a Higher Order Function (HoF)

*/

function cookFood(order) {
    console.log("Cooking your:" , order);
}


function serveDrinks(drinksOrder) {
    console.log("Serving drinks:" , drinksOrder);
}

function Restaurant(cookFood, serverDrinks, orderType, order) {
    if (orderType == "Food") {
        cookFood(order);
    } else if (orderType == "Drinks") {
        serveDrinks(order);
    }
}

Restaurant(cookFood, serveDrinks, 'Food', "Pizza");
Restaurant(cookFood, serveDrinks, 'Drinks', "Coke");

/* Standard HoF*/
//forEach

const arr = [1,2,3,4,5,6];

// One way to traverse
// for (let i=0; i< arr.length; i++ ) {
//     console.log(arr[i]);
// }


function printAllOddNumbers(num) {
    if (num% 2 == 1) {
        console.log(num);
    }
}

const each = (element, index, entireArray) => {
    console.log(element, index, entireArray);
}

arr.forEach(printAllOddNumbers);


/* .map
Returns a 1:1 Mapping in the form of an array

*/

const square = (num) => num * num;

const squareNumbers = arr.map(square);

console.log(arr);
console.log(squareNumbers);


/* .filter
Given a condition it filters out element
Only the filtered elements would be returned as a new array
*/

const isEven = (num) => num % 2 == 0;

const evenNumbers = arr.filter(isEven);
console.log(arr);
console.log(evenNumbers);

// const squareEvenNumbers = evenNumbers.map(square);
// These HoF are chainable
const squareEvenNumbers = arr
                            .filter(isEven)
                            .map(square);

/* Reduce
 Want to go through the enrire array and reduce it to a single value

*/

const reducer = (accumulator, current) => {
    accumulator += current;
    return accumulator;
}

const total = arr.reduce(reducer, 0);

console.log(total);


