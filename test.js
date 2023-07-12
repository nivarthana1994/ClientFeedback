const events = require('events');

function wrapGameAction(emitter, actionName, callback) {
    const myEmitter = new EventEmitter();
    myEmitter.on('actionName', (arg) => {
      console.log('Action event occurred with argument:', arg);
    });
    }
    
    
    let emitter = new events.EventEmitter();
    wrapGameAction(emitter, "player_1_select", console.log);
    emitter.emit("player_1_select", "{ \"row\": 1, \"column\": 1 }");
    
    module.exports.wrapGameAction = wrapGameAction;