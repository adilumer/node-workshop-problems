const util = require("util");
const fs = require("fs");

const writePromise = util.promisify(fs.writeFile);
const data = `{
  "hello": "world"
}`;

async function testPromises() {

  const f = await writePromise("../data/sample.json", data);

  console.log(f, "file written.");

}

testPromises();