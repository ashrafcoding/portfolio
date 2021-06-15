import React from "react";
import "./skills.css";
import { icons } from "./iconlist";

function Skills() {

  return (
    <div className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="line"></div>
      <div className="skills__container bd-grid">
        <div className="skills-left">
        {icons.map((icon, id) => {
          return (<div className="skills-icon" key={id} >
               <p className="skill-name">{icon.name}</p>
               <img src={icon.link} alt="" key={id}
               data-aos="flip-right" data-aos-delay={id*100}/>
           
          </div>)
           })}
        </div>
        <div className="skills__img" data-aos="slide-left">
          <img src="./assets/desk.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
