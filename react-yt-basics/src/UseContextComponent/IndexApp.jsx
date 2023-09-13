import { createContext } from "react";
import Class1 from "./Class1";

// useContext Hook
// create, provider, useContext

const d1 = createContext();
const d2 = createContext();

const IndexApp = () => {
  const classname = "Python Class";
  const day = "Monday";
  return (
    <>
      <d1.Provider value={classname}>
        <d2.Provider value={day}>
          <Class1 />
        </d2.Provider>
      </d1.Provider>
    </>
  );
};

export default IndexApp();
export  { classname, day };
