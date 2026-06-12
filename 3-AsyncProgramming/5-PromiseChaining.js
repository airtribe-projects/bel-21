const asyncFunction1 = () => {
    const response = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 1 Success res1");
            reject("AF1 Rejected");
            resolve("AF 1 Success res 2");

            console.log("Logging after resolution of AF 1");
        }, 1000);
    })
    
    return response;
};

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("AF 2 Success");
        }, 1000);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 3 Success");
        }, 1000);
    })
};

const main =  () => {
    console.log("Step 1");
    
    asyncFunction1()
        .then((response) => {
            console.log(response);
            return asyncFunction2()
        })
        .catch(err => {
            console.log("Error: ", err)
            return "Caught Error in Async Fn 2"
        })
        .then((res) => {
            console.log(res);
            return asyncFunction3() 
        })
        .catch(err => console.log("Error: ", err))
        .then((res) => console.log(res))
        .catch(err => console.log("Error: ", err))
        .finally(() => [
            console.log("All promises executed")
        ])
};

main()

