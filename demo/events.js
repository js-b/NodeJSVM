const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log('ON: anything', data);
// })

// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {a: 2})

// setTimeout(()=>{
//     emitter.emit('anything',{c:3})
// },1000)

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb){
        console.log('[Subscriber...');
        this.on(eventName,cb)
    }
    dispatch(eventName, data){
        console.log('[Dispatcging...');
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa',data =>{
    console.log('ON: aa', data);
})

dis.dispatch('aa',{aa: 22})
dis.dispatch('aa',{aa: 33})


    

