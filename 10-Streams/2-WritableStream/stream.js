const fs = require('fs');

const writableStream = fs.createWriteStream('../output/writeResponse.txt');

writableStream.write("Hello World! \n");

for (let i=0; i< 10000; i++) {
    writableStream.write(`Line ${i} \n`);
}


writableStream.on('end', () => {
    console.log("Writing to stream ended");
});

writableStream.on('error', (err) => {
    console.log("Stream encountered error", err);
});

