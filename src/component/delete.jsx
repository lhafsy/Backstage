

var $ = require("jquery");
var React = require('react');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;

var AppComponentCopy = React.createClass({
  getDefaultProps:function() {
    return {
      columns: [],
      columns1:[]
    }
  },
  getInitialState: function(){
    return {value:[]}
  },
  componentDidMount:function(){
    var self =this
    $.ajax({
      url:'http://localhost:888/lha',
      type: "GET",
      async:false,
      success: function(msg){
        self.setState({value:msg});
        // console.log(this);
        // console.log(self);
        console.log(1)
      }
    })
  },
  render:function(){
   console.log(2)
   for(var key in this.state.value[0]){
    this.props.columns.push(key);
  }
  console.log(this.props.columns)
  console.log(this.state.value[0])

  return (
   <thead>
   <tr>
   {
    this.props.columns.map(function(elem, index) {
      return <th name={elem} key={elem}>{elem}</th>;})
  }
  </tr>
  </thead>
  );
}
});

module.exports = AppComponentCopy;
