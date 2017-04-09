var MainDispatcher = require('../dispatcher/dispatcher.js');

var ButtonAction = {
	login: function(){
		MainDispatcher.dispatch();
	}
};

module.exports = ButtonAction;