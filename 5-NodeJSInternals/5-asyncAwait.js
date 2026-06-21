const internalCall = async () => {
    console.log("Internal log");
    
    Promise.resolve().then(() => { // P2
        console.log("PT inside await ");
    })
}


const main = async () => {
    setTimeout(() => { // T1
        console.log('Log from timer');
    }, 0);
    
    Promise.resolve().then(() => { // P1
        console.log("Hello there");
    })
    

    await internalCall();
    // internalCall().then(() => {
    //     // P3
    //     process.nextTick(() => {
    //         console.log("NT");
    //     });
    //     console.log("This is the end");

    //     Promise.resolve().then(() => { // P4
    //         console.log("Promise after await");
    //     })
    // });


    process.nextTick(() => {
        console.log("NT");
    });

    console.log("This is the end");

    Promise.resolve().then(() => { // P4
        console.log("Promise after await");
    })
    
}

main();
