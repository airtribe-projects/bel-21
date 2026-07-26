const asyncFunction  = () => {
    setTimeout(() => {
        console.log('In between');
    }, 0)
};


const main = () => {
    console.log("Start");
    asyncFunction();
    console.log("End");
}
