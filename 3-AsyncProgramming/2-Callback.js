// const asyncFunction  = (cb) => {
//     setTimeout(() => {
//         console.log('In between');
//         cb();
//     }, 0)
// }


// const callback = (response) => {
//     console.log('End');
// }


// // const main =  () => {
// //     console.log('Start');

// //     asyncFunction(callback);
// // }


// const main =  () => {
//     console.log('Start');

//     asyncFunction((err, response) => {
//         console.log("End");
//     });
// }

// main()


// Callback with response
const asyncFunction  = (cb) => {
    setTimeout(() => {
        for (let i = 0; i< 100; i++) {
            // console.log("CB Running")
            cb(null, "In Between");
        }
    }, 0)
}


const main =  () => {
    console.log('Start');

    asyncFunction((err, response) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(response);
        console.log("End");
    });
}

main()



/* Issues: 
    1. Where is the callback defined: Main (Dev owns it)
    2. Where is the callback executed: AsyncFunction 
*/