import React from 'react';
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeData = () => {
    this.setState({color: "blue",year:2020,brand:"Hundai"});
  }
  render() {
    return (
      <div>
        <h2>{this.state.brand}</h2>
        <h2>{this.state.color}</h2>
        <h2>{this.state.year}</h2>
        <button
          type="button"
          onClick={this.changeData}
        >Change state</button>
      </div>
    );
  }
}

export default Car

