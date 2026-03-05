import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cels, setCels] = useState("");
  const [fahr, setFahr] = useState("");

  const handleFahr = (e) => {
    const value = e.target.value;
    setFahr(value);
    let calCels = ((value - 32) / 1.8).toFixed(2);
    setCels(calCels);
  };
  const handleCels = (e) => {
    const value = e.target.value;
    setCels(value);
    let calFahr = (value * 1.8 + 32).toFixed(2);
    setFahr(calFahr);
  };

  return (
    <>
      <div>
        <h2>Temperature converter 😶‍🌫️🥵🥶</h2>
        <b>F</b>: &nbsp;&nbsp;
        <input type="number" value={fahr} onChange={handleFahr} />
        &nbsp;&nbsp; <b>C</b>:&nbsp;&nbsp;
        <input type="number" value={cels} onChange={handleCels} />
      </div>
    </>
  );
}

export default App;
