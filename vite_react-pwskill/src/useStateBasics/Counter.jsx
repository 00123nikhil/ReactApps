import { useState } from "react";


function Counter() {
  let [count, setCount] = useState(0);

  function oneUp() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <button onClick={oneUp}>Count : {count}</button>
    </div>
  );
}

export default Counter;
