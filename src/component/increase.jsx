var React = require('react');
var ReactRouter = require("react-router");
var $ = require("jquery");
var { Router, Route, hashHistory, Link } = ReactRouter;
var common = require('../css/common.css');
var currency = require('../css/currency.css');

var AppComponent = React.createClass({
  getInitialState: function(){
    return {content:[],title:[]}
  },
  componentDidMount:function(){
    $.get('http://localhost:888/lha',function(res){
        this.setState({content:res})
    }.bind(this))
  },
  render() {
    console.log(this.state.content[0]);
    for(key in this.state.content[0]){
      console.log(key)
        this.state.title.push(key)
    }
		return (
      <table class="table table-bordered">
          <thead>
            <tr>
              {
                this.state.title.map(function(item,index){
                  return <th>{item}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            
              {
                this.state.content.map(function(item,index){
                  return <tr>
                            <td>{item.homeId}</td>
                            <td><img src={item.homeImg}/></td>
                            <td>{item.homeMessage}</td>
                            <td>{item.homeBvice}</td>
                            <td>{item.homeSizes}</td>
                            <td>{item.homePosition}</td>
                            <td>{item.homeFeature}</td>
                            <td>{item.homeEvaluate}</td>
                            <td>{item.homeMsg}</td>
                            <td>{item.homeSeat}</td>
                            <td>{item.Mask}</td>
                            <td>{item.home}</td>
                            <td>{item.MaskSynopsis}</td>
                            <td>{item.homePrice}</td>
                            <td>{item.homeFeaturea}</td>
                            <td>{item.homeValue}</td>
                            <td>{item.homeStyle}</td>
                            <td>{item.homeProportion}</td>
                            <td>{item.homeDownPayment}</td>
                            <td>{item.homeRegiterDate}</td>
                            <td>{item.homeFloor}</td>
                            <td>{item.homeDirection}</td>
                            <td>{item.homeTnim}</td>
                            <td>{item.homeType}</td>
                            <td>{item.homeAge}</td>
                            <td>{item.homeArea}</td>
                            <td>{item.checkingTime}</td>
                            <td>{item.number}</td>
                            <td>{item.metro}</td>
                            <td>{item.plot}</td>
                            <td>{item.useful}</td>
                            <td>{item.pageHomeName}</td>
                            <td>{item.listHimg}</td>
                        </tr>
                })
              }
          </tbody>
      </table>
      );
	}
});
      //<div>
      //<h1>增加</h1>
      //<h1>{this.state.value}</h1>
      //</div>
module.exports = AppComponent;
