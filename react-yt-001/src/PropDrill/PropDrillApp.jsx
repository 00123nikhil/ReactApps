import { useState } from "react";
import Login from "./Login";

const PropDrillApp = () => {
  const [name, setName] = useState("Nikhil Profile");
  return (
    <>
      <h1 className="bg-black text-white p-2 mb-4 text-4xl text-center">
        Prop Drilling
      </h1>
      <div className="bg-black text-white p-3 ">
        <h1 className="text-2xl"> PropDrillApp Component </h1>
        <h2>Name : {name}</h2>
        <Login name={name} />
      </div>
    </>
  );
};

export default PropDrillApp;
