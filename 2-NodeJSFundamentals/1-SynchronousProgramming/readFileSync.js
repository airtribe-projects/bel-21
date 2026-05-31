const fs = require('fs');

const filePath = '../leviathan.txt';

console.time("ReadFile");
const data = fs.readFileSync(filePath, 'utf-8');

console.timeEnd("ReadFile");

console.log("File reading complted with bytes read: ", data.length);

for(let i= 0; i< 10; i++) {
    console.log(`${i} Doing more work`);
}