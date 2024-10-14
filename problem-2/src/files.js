const path = require("path");
const fs = require("fs");

//const myFile = "../data/sample.txt"; //path.join(__dirname, "..", "data", "sample.txt");
const myFile = path.join(__dirname, "..", "data", "sample.json");

//const fileData = fs.readFileSync(myFile, "utf8");

const myObject = {
  name: "Lorem 2 ",
  surname: "Ipsum 2"
}

function testFileWriting() {
  fs.writeFile(myFile, JSON.stringify(myObject, null, 2), (err)=>{
    if(err){
      console.log(err);
    } else {
      console.log("Dosya yazılmıştır.");
    }
  });

  console.log("dosyayı yazıyorum.");

}

module.exports = testFileWriting;