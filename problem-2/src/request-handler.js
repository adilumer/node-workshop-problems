function requestHandler(request, response) {
  console.log("new request", request.url || "/");

  
  response.writeHead(200, {'content-type': "text/plain"});
  response.write("Hello, İSKİ");
  response.end();

}

module.exports = requestHandler;