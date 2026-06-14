/*
Async Await: It is a syntactical sugar over promises

*/


const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 1 Success res1");
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


const sum = async (a, b) => {
    return a + b;
}

const diff = (a, b) => {
    return b - a;
}


// 
// const main = async () => {
//     // let resp1;
//     // try {
//     //     resp1 = await asyncFunction1();
//     // } catch (e) {
//     //     console.log("Error: ", e)
//     // }
    
    
//     // console.log("Response: ", resp1); 
//     // const resp2 = await asyncFunction2();
//     // console.log("Response: ",resp2);
//     // const resp3 = await asyncFunction3(); 
//     // console.log("Response: ",resp3);  

//     const resp4 = sum(5,6);

//     console.log("Response 4:", resp4, await resp4)

//     const resp5 = await diff(8,2);
    
//     console.log(resp5);
// }

// const response = main();

// console.log(response);



// Interview Question:

const main = async () => {
    const resp1 = await asyncFunction1();
    console.log("Response: ", resp1); 
    const resp2 = await asyncFunction2();
    console.log("Response: ",resp2);
    const resp3 = await asyncFunction3(); 
    console.log("Response: ",resp3);  
}

const response = main();

