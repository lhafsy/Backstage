


var React = require('react');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;

var MoveChinessComponent = React.createClass({
  render() {
    // return <div>电影</div>;
    // 路由嵌套
    return (
      <div>
       <h1>index</h1>
       <ul>
       <li><Link to="/increase">增加</Link></li>
       <li><Link to="/delete">删除</Link></li>
       <li><Link to="/query">查询</Link></li>
       <li><Link to="/modify">修改</Link></li>
       <p><li><Link to="/">修改</Link></li></p>
       </ul>
       </div>
    );
  }
});

module.exports = MoveChinessComponent;
