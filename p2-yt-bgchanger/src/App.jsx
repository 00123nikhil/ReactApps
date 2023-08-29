import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-4 justify-center shadow-lg bg-white px-3 py-2 rounded-full text-white font-semibold ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full py-1 cursor-pointer"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full py-1 cursor-pointer"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 rounded-full py-1 cursor-pointer"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 rounded-full py-1 cursor-pointer"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full py-1 cursor-pointer "
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
