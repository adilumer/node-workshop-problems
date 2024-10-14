const fs = require("fs");
const readStream = fs.createReadStream("../data/sample.txt", { encoding: "utf8" });

let i = 0;
readStream.on("data", (chunk)=>{
  i++;
  console.log("chunk no.", i, "\n",chunk);
});

readStream.on("end", ()=>{
  console.log("Dosya Okumam bitti.");
});