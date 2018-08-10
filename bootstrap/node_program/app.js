const EventEmitter=require('events');

const emitter=new EventEmitter();


emitter.on('message logged',function(){
    console.log("event is handled");
});


emitter.emit('message logged');
