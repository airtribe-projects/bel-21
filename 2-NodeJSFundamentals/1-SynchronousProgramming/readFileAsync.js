const fs = require('fs');

const filePath = '../leviathan.txt';

console.time("ReadFile");

const readFileCallback = (err, data) => {
    if (err) {
        console.error(Date.now(), "Error Reading file", err.message);
        return;
    }   

    console.log("File Read successfully");

}

const data = fs.readFile(filePath, 'utf-8', readFileCallback);

console.timeEnd("ReadFile");

console.log("File reading complted with bytes read: ");

for(let i= 0; i< 10; i++) {
    console.log(`${i} Doing more work`);
}