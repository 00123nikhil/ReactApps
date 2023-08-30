import React from "react";
import ClassChild1 from "./ClassChild1";

class ClassApp extends React.Component {
  render() {
    return (
      <>
        <h1 className="bg-black text-white p-2 text-center text-2xl">
          Class Component
        </h1>
        <ClassChild1 Movie={"the avenger"} year={"2021"} />
      </>
    );
  }
}
export default ClassApp;
