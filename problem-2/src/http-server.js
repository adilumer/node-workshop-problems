require("./constants");

const http = require("http");
const requestHandler = require("./request-handler");

httpServer = http.createServer(requestHandler);

httpServer.listen(httpServerPort, () => {
  console.log(httpServerPort, "portunda dinliyorum");
});