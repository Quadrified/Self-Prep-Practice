const os = require('os');

/** --------------------------
    Detect platform
 --------------------------**/
console.log('>>>Platform<<<', os.platform());

/** --------------------------
     Detect architecture
 --------------------------**/
console.log('>>>Architecture<<<', os.arch());

/** --------------------------
    CPU core info
--------------------------**/
console.log('>>>CPU core info<<<', os.cpus());

/** --------------------------
     Free memory
 --------------------------**/
console.log('>>>Architecture<<<', os.freemem());

/** --------------------------
     Total memory
 --------------------------**/
console.log('>>>Architecture<<<', os.totalmem());

/** --------------------------
    OS home directory
 --------------------------**/
console.log('>>>OS Home dir<<<', os.homedir());

/** --------------------------
  Up time
--------------------------**/
console.log('>>>Uptime<<<', os.uptime());