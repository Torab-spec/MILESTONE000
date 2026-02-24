import React from "react";
import sytles from "./Bio.module.css";
function Bio() {
  return (
    <div>
      <img
        className={sytles.img}
        src="https://media.istockphoto.com/id/1518854805/photo/black-male-developer-thinking-and-typing-on-computer-surrounded-by-big-screens-showing-coding.jpg?s=2048x2048&w=is&k=20&c=IlCCYISjyhT-wTJ7aybfiT_TAHXZsLflhz_N2NmrZ6k="
        alt="Image"
      ></img>
      <h2>Abu Torab</h2>
      <h3>FreeWill is Ilusion</h3>
    </div>
  );
}

export default Bio;
