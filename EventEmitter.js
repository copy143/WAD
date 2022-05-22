var events = require('events')
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log('I here a scream!');
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');