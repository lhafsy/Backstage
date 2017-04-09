var React = require('react');
var $ = require('jquery');

var Service = React.createClass({
	getInitialState: function(){
		return {items: {}};
	},
	componentDidMount:function(){
		$.get('http://localhost:888/iuy',function(data){
			console.log(data);
		})
	},
	render: function(){
		return (
			<div>
				
			</div>
		)
	}
})