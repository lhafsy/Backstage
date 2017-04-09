var React = require('react');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;
var css = require('../css/Login.css');
var AppAction = require('../actions/appAction.js');



var AppLogin = React.createClass({
       Login:function(){

       },
      	render() {
      	
      		return (
                   <div className='Login'>
                          <div className="Msg">
                                 <div>
                                     爱家网后台管理
                                 </div>
                                 <div>
                                        <input type='text' placeholder='账号'id="name"/>
                                        <br />
                                        <input type='password' placeholder='密码' id="psw" />
                                 </div>
                                 <div><input type='button' value='登录' onClick={this.Login} /></div>
                          </div>
                   </div>                    	      
      		);
      	}
      });

module.exports = AppLogin;
