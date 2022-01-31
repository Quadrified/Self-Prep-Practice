const path = require('path');

console.log('>>>__dirname<<<', __dirname);

console.log('>>>__filename<<<', __filename);

/** --------------------------
     Base dir name
 --------------------------**/
console.log('>>>Base dir name<<<', path.basename(__dirname));

/** --------------------------
    Base file name
 --------------------------**/
console.log('>>>Base file name<<<', path.basename(__filename));

/** --------------------------
    File extension
 --------------------------**/
console.log('>>>Path extension<<<', path.extname(__filename));

/** --------------------------
    Create path object
 --------------------------**/
console.log('>>>Path object<<<', path.parse(__filename));
console.log('>>>Path object base<<<', path.parse(__filename).base);
console.log('>>>Path object extension<<<', path.parse(__filename).ext);

/** --------------------------
    Concatenate paths
    To create => ../ test / hello.js
 --------------------------**/
console.log('>>>Joining paths<<<', path.join(__dirname, 'test', 'hello.js'));