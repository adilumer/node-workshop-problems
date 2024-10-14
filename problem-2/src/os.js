//https://nodejs.org/api/os.html

const os = require("os");

function getFreeRAM() {
  const bytes = os.freemem();
  const freeRam = Math.round(bytes/(1024*1024)); // Return free memory in MB.
  return freeRam;
}

module.exports = {
  getFreeRAM: getFreeRAM,
} 