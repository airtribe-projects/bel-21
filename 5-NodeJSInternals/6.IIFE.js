setTimeout(() => console.log("A"), 0);  // T1

Promise.resolve()
.then(() => {   // P1
    console.log("B");
    return new Promise(resolve => {
        setTimeout(() => {  // T2
            console.log("C");
            resolve();
        }, 0)
    });
})
.then(() => { // P2
    console.log("D");
});


(async () => {  // F1
    console.log("E");
    await null;
    console.log("F"); 
})();

// f1 => {
//     console.log('f1')
// }
// f1()

console.log("G");