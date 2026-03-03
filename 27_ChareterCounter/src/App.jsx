import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const charCount = text.length; // here text work as string || and text.length is a string len

  return (
    <>
      <div>
        <h2>Charecter Counter</h2>
        <textarea
          placeholder="Type your thought"
          value={text}
          onChange={handleChange}
        ></textarea>
        <p>Charecter counter : {charCount} </p>
      </div>
    </>
  );
}

export default App;
