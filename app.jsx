var Input = React.createClass({
  getInitialState: function() {
    return {value: this.props.children};
  },
  handleChange: function(event) {
    this.props.onValueChange(event.target.value, this.props.id);
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <div>
        <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
        />
        <span>
            {this.state.value * 10} 
        </span>
      </div>
    );
  }
});

var Calculator = React.createClass({
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
      <div className="commentList">
        <Input onValueChange={this.changeInput} id={0}>{this.state.values[0]}</Input> 
        <Input onValueChange={this.changeInput} id={1}>{this.state.values[1]}</Input> 
        <span>
            {this.calc()}
        </span>
      </div> 
    );
  }
}); 

ReactDOM.render(
  React.createElement(Calculator, null),
  document.getElementById('content')
);