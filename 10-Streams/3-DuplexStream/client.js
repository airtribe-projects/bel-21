const net = require('net');  // L4

// Connect to the chat server
const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to chat server');
  process.stdin.pipe(client); 
});



client.on('data', (data) => {
  console.log(`Received: ${data}`);
});

// Cleanup
client.on('end', () => {
  console.log('Disconnected from chat server');
});

client.on('error', (err) => {
  console.error('Client error:', err);
});

process.stdin.on('end', () => {
  client.end();
});
