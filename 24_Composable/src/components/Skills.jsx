import React from "react";
import sytles from "./Skills.module.css";

function Skills() {
  return (
    <div>
      <h2>Skills 💪</h2>
      <ul className={sytles.skillList}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Tailwind</li>
        <li>ReactJS</li>
        <li>Git&Github</li>
      </ul>
    </div>
  );
}

export default Skills;
