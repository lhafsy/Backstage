var React = require('react');
var ReactDOM = require('react-dom');

var increase = require('./component/increase.jsx');
var delete1 = require('./component/delete.jsx');
var query = require('./component/query.jsx');
var modify = require('./component/modify.jsx');
var currency = require('../currency.css');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;

// var RootComponent = React.createClass({
// 	render() {
// 		return (
// 			<div>
// 				<h1>index</h1>
// 				<ul>
// 				  	<li><Link to="/move">电影</Link></li>
// 				  	<li><Link to="/music">音乐</Link></li>
// 				</ul>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(
// 	(<Router history={hashHistory}>
// 		<Route path="/" component={RootComponent}/>
// 		<Route path="/move" component={increase}/>
// 		<Route path="/music" component={modify}/>
// 	</Router>)
// 	, document.getElementById('content')
// );




// 路由嵌套
var RootComponent = React.createClass({
  componentDidMount() {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
      )
  },

  routerWillLeave(nextLocation) {
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      return true;
    },
    render() {
      return (
       <div>
       <h1  className="aa">index</h1>
       <ul>
       <li><Link to="/increase">增加</Link></li>
       <li><Link to="/delete">删除</Link></li>
       <li><Link to="/query">查询</Link></li>
       <li><Link to="/modify">修改</Link></li>
       <div >1</div>
       </ul>
       </div>
       );
    }
  });

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={RootComponent}/>
		<Route path="/increase" component={increase}/>
    <Route path="/delete" component={delete1}/>
    <Route path="/query" component={query}/>
    <Route path="/modify" component={modify} />


    </Router>)
	, document.getElementById('content')
  );

function enterMusicFun(nextState, replace, next){
	replace('/move');
	next();
}
