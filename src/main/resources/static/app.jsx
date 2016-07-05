//var React = require('react');

//var App = React.createClass({
//    getInitialState: function () {
//        return ({triples: []});
//    },
//    componentDidMount: function () {
//        const arr = [
//        	{ subj: "the man", pred: "ran to", obj: "the car" },
//        	{ subj: "the woman", pred: "payed for", obj:"the groceries" }
//        ];
//        this.setState({triples: arr});
//    },
//    render: function () {
//        return (
//			<h1>Hello World!</h1>
//        )
//    }
//})

define(function(require){

  let React = require('react');
  let ReactDOM = require('react-dom');

  function App() {
	  
	console.log(React)  
	console.log(ReactDOM) 
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Yeah booiiee in React!</p>
          </div>
        );
      }
    });
  }

  App.prototype.init = function () {
	  ReactDOM.render(<this.AppView />, document.getElementById("content"));
  };

  return App;

});


