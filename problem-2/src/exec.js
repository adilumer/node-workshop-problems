const { exec } = require('child_process');

exec("curl ifconfig.me", (error, stdout, stderr) => {
  console.log(error);
  console.log(stdout);
  console.log(stderr);
});