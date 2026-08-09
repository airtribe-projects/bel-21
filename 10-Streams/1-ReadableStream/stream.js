const fs = require('fs');

const readableStream = fs.createReadStream('../input/leviathan.txt',  { encoding: 'utf8', highWaterMark: 100*1024});

// const fileContent = fs.readFileSync('../input/leviathan.txt');

let count = 0;
readableStream.on('data', (chunk) => {
    count++;
    console.log("$$Received Chunk", count);
});

readableStream.on('end', () => {
    console.log("Reading from stream ended");
});

readableStream.on('error', (err) => {
    console.log("Stream encountered error", err);
});

