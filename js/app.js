var Input = React.createClass({displayName: "Input",
  getInitialState: function() {
    return {value: this.props.children};
  },
  handleChange: function(event) {
    this.props.onValueChange(event.target.value, this.props.id);
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {
            type: "number", 
            value: this.state.value, 
            onChange: this.handleChange}
        ), 
        React.createElement("span", null, 
            this.state.value * 10
        )
      )
    );
  }
});

var Calculator = React.createClass({displayName: "Calculator",
  getInitialState: function() {
    return {values: [10, 20]};
  },
  changeInput: function(value, i) {
    console.log(value + " " + i);
    this.state.values[i] = value;
    this.setState({values: this.state.values});
  },
  calc: function(){
    var result = 0;
    this.state.values.map(function(item){
        result += item * 10;
    });
    return result;
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentList"}, 
        React.createElement(Input, {onValueChange: this.changeInput, id: 0}, this.state.values[0]), 
        React.createElement(Input, {onValueChange: this.changeInput, id: 1}, this.state.values[1]), 
        React.createElement("span", null, 
            this.calc()
        )
      ) 
    );
  }
}); 

ReactDOM.render(
  React.createElement(Calculator, null),
  document.getElementById('content')
);