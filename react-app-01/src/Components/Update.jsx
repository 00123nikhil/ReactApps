import { useState } from "react";

function Update() {
  const [input, setInput] = useState("");
  const [inputtext, setInputtext] = useState("");

  function updateButton() {
    setInput(inputtext);
  }
  function updateInputText(e) {
    const inputValue = e.target.value;
    setInputtext(inputValue);
  }

  return (
    <>
      <div>
        <h2>Input Update</h2>
        <p>Updated database is : {input}</p>
        <input type="text" onChange={updateInputText} />
        <button onClick={() => updateButton()}>Submit</button>
      </div>
    </>
  );
}
// refer 18_states,props,links

export default Update;
