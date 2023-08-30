import React from "react";

export default class ClassState extends React.Component {
  render() {
    state = {
      name: "Nikhil",
      count: 0,
    };
    inc = () => this.setState((prevState) => ({ count: prevState.count + 1 }));
    return (
      <div>
        <h1>Class Component | States</h1>
        <h1>{this.state.name} </h1>
        <h1>{this.state.count} </h1>
        <button onClick={this.inc}> increment </button>
      </div>
    );
  }
}
