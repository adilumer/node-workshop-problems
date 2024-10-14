const crypto = require("crypto");

function createSHA256(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

module.exports = {
  createSHA256: createSHA256
}