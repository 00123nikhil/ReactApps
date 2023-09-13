import { useContext } from "react";
import { classname, day } from "./IndexApp";

function Class3() {
  const classname = useContext(classname);
  const day = useContext(day);
  return (
    <div>
      {/* Class3 Component  */}
      <p>
        This is a {classname} and today is a {day}
      </p>
    </div>
  );
}

export default Class3();
