var Dispatcher = require('flux').Dispatcher;
var MainDispather = new Dispatcher();

var MainStore = require('../stores/store.js');

MainDispather.register(function(text){
	MainStore.login(text);
	MainStore.emitChange();
});

module.exports = MainDispather;