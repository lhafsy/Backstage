var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var assign = require('object-assign');

var MainStore = assign({}, EventEmitter.prototype, {

	getAll: function(){
		return this.items;
	},
	login: function(){
		$.ajax({
			url:'http://localhost:88/'+'',
			method:'post',
			data:{},

		})
	},
	emitChange: function(){
		this.emit('change');
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}	
});

module.exports = MainStore;