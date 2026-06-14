const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("AF 1 Success res1");
            console.log("AF 1 executed")
        }, 100);
    })
};

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 2 Success");
            console.log("AF 2 executed")
        }, 500);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 3 Success");
            console.log("AF 3 executed")
        }, 800);
    })
};


// Promise.all
// const main =  () => {
//     const resp = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

//     resp.then(values => {
//         console.log(values);
//     }).catch((err) => {
//         console.log("ERR: ", err)
//     })

//     console.log(resp);
// };


// Promise.allSettled

// const main =  () => {
//     const resp = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

//     resp.then(values => {
//         console.log(values);
//     }).catch((err) => {
//         console.log("ERR: ", err)
//     })

//     console.log(resp);
// };

// main()



// Promise.any:  Returns the result of first fulfilled promise 
// Fetching identical records from multiple system

// const main =  () => {
//     const resp = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

//     resp.then(values => {
//         console.log("Response:", values);
//     }).catch((err) => {
//         console.log("ERR: ", err)
//     })

//     console.log(resp);
// };

// main()


// Promise.any:  Returns the result of first settled promise 

const main =  () => {
    const resp = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

    resp.then(values => {
        console.log("Response:", values);
    }).catch((err) => {
        console.log("ERR: ", err)
    })

    console.log(resp);
};

main()



