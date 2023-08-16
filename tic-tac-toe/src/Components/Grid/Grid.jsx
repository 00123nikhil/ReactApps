import { useDeferredValue, useState } from "react";
import Card from "../Cards/Card";
import './Grid.css'

const Grid = ({ numberofCards }) => {
  const [board, setBoard] = useState(Array(numberofCards).fill(""));

  return (
    <div className="Grid">
      {board.map((el, idx) => (
        <Card key={idx} />
      ))}
    </div>
  );
};

export default Grid;
