const fs = require('fs');
const path = require('path');

/** --------------------------
    Create folder
    Async function
 --------------------------**/
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err;
    console.log('>>>Folder created<<<',);
});

/** --------------------------
    Create and write to file
 --------------------------**/
fs.writeFile(path.join(__dirname, '/test', 'hello.js'), 'console.log("Hello world")', (err) => {
    if (err) throw err;
    console.log('>>>File written<<<',);
});

/** --------------------------
    Write to file => replaces previous text
 --------------------------**/
fs.writeFile(path.join(__dirname, '/test', 'hello.js'), 'console.log("I love NodeJS")', (err) => {
    if (err) throw err;
    console.log('>>>File written<<<',);
});

/** --------------------------
    Append to file
 --------------------------**/
fs.writeFile(path.join(__dirname, '/test', 'hello.js'), 'console.log("Hello world")', (err) => {
    if (err) throw err;
    console.log('>>>Appending to file<<<');

    // File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.js'), '\n console.log("I love NodeJS")', (err) => {
        if (err) throw err;
        console.log('>>>File written<<<');
    });
})

/** --------------------------
    Read file
 --------------------------**/

fs.readFile(path.join(__dirname, '/test', 'hello.js'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('>>>Reading data<<<', data);
});

/** --------------------------
    Rename a file
 --------------------------**/
fs.rename(
    path.join(__dirname, '/test', 'hello.js'),
    path.join(__dirname, '/test', 'hello_world.js'),
    (err) => {
        if (err) throw err;
        console.log('>>>Renaming<<<');
    }
);