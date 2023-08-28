import { useState } from "react";

function Language() {
  const [Language, setLanguage] = useState("Loading...");

  //   you can create your own function
  const updateLanguge = (Language) => setLanguage(Language);
  return (
    <>
      <div>
        <p>You selected Language is : {Language}</p>
        <button onClick={() => setLanguage("HTML")}>HTML</button>
        <button onClick={() => setLanguage("CSS")}>CSS</button>
        <button onClick={() => setLanguage("Javascript")}>Javascript</button>
        {/* add to onclick your function */}
        <button onClick={() => updateLanguge("Typescript")}>Typescript</button>
      </div>
    </>
  );
}
export default Language;
