const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', {highWaterMark: 512*1024}); // Read at very fast  (128 KBPS)
const writableStream = fs.createWriteStream('../output/backpressureFile.txt', {highWaterMark: 128*1024}); // Write could be slow (2 KBPS)

const { Transform } = require('stream');

const lowerCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toLowerCase());
        callback();
    }
});

readableStream
    .pipe(lowerCaseTransform)
    .pipe(writableStream);

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
