import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <div>
        <h2>Like Button 👍</h2>
        <button
          onClick={handleLike}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            color: "black",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: isLike ? "blue" : "grey", // initial color - grey, after like is will blue
          }}
        >
          {isLike ? "yohhh !! You like me 🙂" : "Alas !! You dont Like me 😒"}
        </button>
      </div>
    </>
  );
}

export default App;
