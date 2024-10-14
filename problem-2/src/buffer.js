function testBufferUsage(){
  const buffer = Buffer.from("Hello İSKİ", "utf-8");
  console.log(buffer);
  
  const str = buffer.toString("utf8");
  console.log(str);
}

testBufferUsage();