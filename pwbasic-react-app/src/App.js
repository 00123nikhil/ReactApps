import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState("default");
  const handleClick = () => {
    name = setName("useState of React hook");
  };
  return (
    <>
      {/* Use state in react */}
      <div className="container">
        <div>
          <h1>UseState in React</h1>
          <p>{name}</p>
          <button onClick={handleClick}>Change State</button>
        </div>
      </div>
    </>
  );
}

export default App;
