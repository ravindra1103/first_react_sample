var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header title="Test Basic React"/>
      </div>
    );
  }
});

ReactDOM.render(<App/>,  document.getElementById("app"));
