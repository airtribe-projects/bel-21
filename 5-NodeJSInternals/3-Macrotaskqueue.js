/*
6 Queues/Phases of Macrotask Queue
1. Timers Phase: setTimeout & setInterval, any callbacks originating from the timers (Dev relevance)
2. Pending Callback Phase: 
    TCP errors, DNS errors, deferred network callbacks (Low level system errors)
3. Idle / Prepare phase =>  Internally used by the system to maintain event loop phases. Not generally used by developers
4. Poll Phase: 
    - All new i/O events and related callbacks like DB Calls, FS call, socket call
5. Check phase: 
    - for setImmediate callbacks
6. Close phase
    - Socket handling
    - cleanup like closing database
*/

// const fs = require('fs');

// Example 1: 

// const fs = require('fs');
// const stream = fs.createReadStream('temp.txt');

// stream.on('close', () => {
//  console.log('Log from close callback (Phase 6)');
// });

// setTimeout(() => {            // Phase 1               
//     console.log('Log from timer (Phase 1)');
// }, 0);

// stream.destroy();

// // console.log("Main");

// Example 2: 

// setImmediate(() => {
//     console.log("setImmediate inside I/O");
// });

// setTimeout(() => {
//         console.log("SetTimeOut inside I/O");
// }, 0);




// Example 3:
// fs.readFile('./temp.txt', () => {
//     setTimeout(() => {
//         console.log("SetTimeOut inside I/O");
//     });

//     setImmediate(() => {
//         console.log("setImmediate inside I/O");
//     })
// });


// Example 4:

const fs = require('fs');
fs.readFile('./temp.txt', () => {
    // This will be called in I/O phase of event loop
    setTimeout(() => {
        console.log("SetTimeOut inside I/O");
    },0);

    setImmediate(() => {
        console.log("setImmediate inside I/O");
    })

    Promise.resolve().then(() => {
        console.log("promise then 1");
    })
});
