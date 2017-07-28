const { exec } = require('child_process');



exec('sudo nmap 192.168.178.0/24 -sP', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  log.inf('exec',`stdout: ${stdout}`);
  log.inf('exec',`stderr: ${stderr}`);
});
