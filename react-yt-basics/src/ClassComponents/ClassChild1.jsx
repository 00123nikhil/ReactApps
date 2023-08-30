import React from "react";

export default class ClassChild1 extends React.Component {
  render() {
    return (
      <>
        <div className=" bg-gray-700 text-white p-2">
          <h1 className="text-2xl">ClassChild1 Component</h1>

          <div>
            <h2 className="">Props from parents</h2>
            <p>Movie name : {this.props.Movie} </p>
            <p>Year : {this.props.year} </p>
          </div>
        </div>
      </>
    );
  }
}
