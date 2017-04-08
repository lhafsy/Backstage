var MainDispatcher = require('../dispatcher/dispatcher.js');

var ButtonAction = {
	addNewItem: function(text){
		MainDispatcher.dispatch(text);
	}
};

module.exports = ButtonAction;