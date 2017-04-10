var React = require('react');
var ReactRouter = require("react-router");
var userMsg = require("../css/userMsg.css")
var { Router, Route, hashHistory, Link } = ReactRouter;

var UserMsgComponent = React.createClass({
  render() {
    // return <div>电影</div>;
    // 路由嵌套
    return (
        <div className="lgy_UserMsg">
            <div className="lgy_User">
              <span className="lgy_UserNameMsg">用户名:</span>
              <input type="text" placeholder="请输入用户名" className="inputPsw"/>
            </div>
            <div className="lgy_User">
              <span>密码:</span>
              <input type="text" placeholder="请输入密码" className="inputPsw"/>
            </div>
            <div className="lgy_User">
              <span>员工编号:</span>
              <input type="text" placeholder="输入员工编号" className="inputName"/>
            </div>
            <div className="lgy_User">
              <span>我的名字:</span>
              <input type="text" placeholder="请输入用户名"/>
            </div>
            <div className="lgy_User">
              <span>备注:</span>
              <textarea name="" id="" cols="30" rows="10">
                
              </textarea>
            </div>
          </div>      
    );
  }
});

module.exports = UserMsgComponent;
