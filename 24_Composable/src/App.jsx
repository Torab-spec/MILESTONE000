import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Bio></Bio>
        <hr />
        <Contact></Contact>
        <hr />
        <Experience></Experience>
        <hr></hr>
        <Skills></Skills>
      </div>
    </>
  );
}

export default App;
