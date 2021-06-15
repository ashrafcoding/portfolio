import React from "react";
import "./header.css";

function Header(){
  
    return (
      <div className="home__container bd-grid">
        <h1 className="home__title" data-aos="slide-down">
          <span>HE</span>
          <br />
          LLO.
        </h1>

        <div className="image-home-wrap" data-aos="slide-left">
          <img src="./assets/developer.svg" alt="" className="home__img" />
        </div>
      </div>
    );
  
}

export default Header;
