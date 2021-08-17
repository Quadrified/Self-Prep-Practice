const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => {
    [...Array(5)].forEach(() => {
        console.log('>>>Event fired<<<')
    })
});

// Firing listener
myEmitter.emit('event');