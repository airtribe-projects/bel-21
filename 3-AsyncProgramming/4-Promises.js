/*

### Why Promises?
- Clean and maintainable async code.
- Avoid callback hell.

## Introduction to Promises
Whenever you call a function, the return of that function is gonna be a promise.

What's a promise?
A **Promise** represents a value that may be available now, or in the future, or never. It is a better way to handle asynchronous code in JavaScript.
You have something to hold onto. It would either return some value (resolved) or throw an error (rejected)


### Promise States
- PENDING
- SETTLED
    - FULFILLED (Sometimes also called RESOLVED, but techincally the name of the state is FULFILLED)
    - REJECTED
*/


const asyncFunction1 = () => {
    const response = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 1");            
            resolve();
        }, 1000);
    })
    
    return response;
};


const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 2");            
            resolve();
        }, 1000);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 3");            
            resolve();
        }, 1000);
    })
};


// const main =  () => {
//     console.log("Step 1");
    
//     asyncFunction1().then(() => {
//         asyncFunction2().then(() => {
//             asyncFunction3().then(() => {
//                 console.log("All Done");
//             })
//         });
//     })
// };


const main =  () => {
    console.log("Step 1");
    
    asyncFunction1()
        .then(asyncFunction2)
        .then(asyncFunction3)
        .then(() => console.log("All Done"));
};

main()

