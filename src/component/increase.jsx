var React = require('react');
var ReactRouter = require("react-router");
var $ = require("jquery");
var { Router, Route, hashHistory, Link } = ReactRouter;

var AppComponent = React.createClass({
  getInitialState: function(){
    return {value:['a']}
  },
  componentDidMount:function(){
    var self =this




    $.ajax({
      url:'http://localhost:888/lha',
      type: "GET",
      success: function(msg){
        console.log(msg)
        self.setState({value:JSON.stringify(msg)});
        console.log(this);
        console.log(self);
      }
    })
  },
  render() {
		// return <div>电影</div>;
		// 路由嵌套
		return (
      <div>
      <h1>增加</h1>
      <h1>{this.state.value}</h1>
      </div>
      );
	}
});

module.exports = AppComponent;
