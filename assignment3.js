//EVENT LOOP

// The Event Loop is a fundamental mechanism in single-threaded environments like JavaScript (Node.js and browsers) 
// that enables non-blocking I/O.  

// When something time-consuming happens (like a timer, API call, or reading a file), 
// JavaScript hands that job off to the browser or Node’s background system. 
// Once the job finishes, the callback is pushed into a queue.

// This process ensures that long-running operations don't freeze the application, keeping the program responsive.

//Call Stack Executes Sync Code: The main thread processes synchronous code sequentially in the Call Stack.
//Task Queue Holds Async Callbacks: Completed asynchronous operations place their callbacks in the Task Queue.
//Event Loop Manages Execution: The Event Loop monitors the Call Stack and Task Queue, 
//moving callbacks to the Call Stack when it's empty, allowing asynchronous code to run without blocking.

//EXAMPLE CODE
console.log("Start");

setTimeout(() => {
  console.log("Async task done");
}, 0);

for (let i = 0; i < 5000; i++) {
}

console.log("End");



//READ FILE USING READ STREAM
const fs = require("fs");

const readStream = fs.createReadStream("output.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Reading completed.");
});


//WRITE FILE USING WRITE STREAM
const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("This is written using a stream.\n");
writeStream.write("Streaming is useful for big files.");

writeStream.end();

writeStream.on("finish", () => {
  console.log("Writing completed.");
});
