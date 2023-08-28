import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  let Inc = () => setCount(count + 1);
  let Dec = () => setCount(count - 1);

  return (
    <>
      <div className="">
        <h1>Counter</h1>
        <button onClick={Dec}>Decrement</button>
        <button className="">{count}</button>
        <button onClick={Inc}>Increment</button>
      </div>
    </>
  );
};
export default Counter;
