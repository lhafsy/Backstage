var React = require('react');
var ReactDOM = require('react-dom');

var increase = require('./component/increase.jsx');
var delete1 = require('./component/delete.jsx');
var query = require('./component/query.jsx');
var modify = require('./component/modify.jsx');
var login = require('./component/Login.js');
var userMsg = require('./component/userMsg.jsx');
// 样式
var currency = require('./css/currency.css');
var common = require('./css/common.css');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;



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
         <div className="top">
           <h3 className="topLeft">后台管理系统</h3>

           <div className="topRight">
           <span ><Link to="/userMsg">超级管理员</Link></span>
           </div>
         </div>

         <div className="content box">
            <div className="contentLeft">
             <ul>用户信息
               <li><Link to="/increase">增加</Link></li>
               <li><Link to="/delete">删除</Link></li>
               <li><Link to="/query">查询</Link></li>
               <li><Link to="/modify">修改</Link></li>
             </ul>
              <ul>房源信息
               <li><Link to="/increase">增加</Link></li>
               <li><Link to="/delete">删除</Link></li>
               <li><Link to="/query">查询</Link></li>
               <li><Link to="/modify">修改</Link></li>
             </ul>
               <ul>经纪人
               <li><Link to="/increase">增加</Link></li>
               <li><Link to="/delete">删除</Link></li>
               <li><Link to="/query">查询</Link></li>
               <li><Link to="/modify">修改</Link></li>
             </ul>
             </div>
              <div id="contentRight">
                {this.props.children}
               </div>

         </div>

       </div>
       );
    }
  });

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={RootComponent}>
      <Route path="/increase" component={increase}/>
      <Route path="/delete" component={delete1}/>
      <Route path="/query" component={query}/>
      <Route path="/modify" component={modify} />
      <Route path="/userMsg" component={userMsg} />
    </Route>
    <Route path="login" component={login} />





    </Router>)
	, document.getElementById('content')
  );



// function enterMusicFun(nextState, replace, next){
// 	replace('/login');
// 	next();
// / }
