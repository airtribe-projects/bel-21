const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', {highWaterMark: 512*1024}); // Read at very fast  (128 KBPS)
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', {highWaterMark: 128*1024}); // Write could be slow (2 KBPS)

readableStream.on('data', (chunk) => {
    console.log(`Read ${chunk.length} bytes`);
    const canWrite = writableStream.write(chunk);
    console.log(canWrite);

    if (!canWrite) {
        console.log("Readable stream.pause");
        readableStream.pause();
    }
});

writableStream.on('drain', () => {
  console.log('Writable stream drained, resuming readable stream');
  readableStream.resume();
});


readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
