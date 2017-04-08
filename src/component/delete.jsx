
module.exports = AppComponentCopy;

var React = require('react');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;

var AppComponentCopy = React.createClass({
  render() {
    // return <div>电影</div>;
    // 路由嵌套
    return (
       <div>
       <h1>删除</h1>
       </div>
    );
  }
});

module.exports = AppComponentCopy;
