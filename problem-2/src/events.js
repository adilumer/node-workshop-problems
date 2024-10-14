const EventEmitter = require("events").EventEmitter;
const fs = require("fs");
const path = require("path");

const eventEmitter = new EventEmitter();

eventEmitter.on("file-written", (e) => {
  console.log ("file written. error:", e);
});

function testFileWriting() {
  fs.writeFile(path.join(__dirname, "..", "data", "sample.json"), JSON.stringify({}, null, 2), (err)=>{
    eventEmitter.emit("file-written", err);
  });
}

testFileWriting();