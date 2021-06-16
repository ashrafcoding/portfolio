import React from 'react'
import './about.css'

function About({theme}) {


    return (
        <div className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="line"></div>
    
            <div className="about__container bd-grid">
                <div className="about__img" data-aos="slide-right">
                    <img src="./assets/programmer2.svg" alt=""/>
                </div>
    
                <div className="about-right">
                    <h2 className="about__subtitle">I'am Ashraf Eid</h2>
                    <span className="about__profession">Web developer</span>
                    <p className="about__text">A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
    
                    <div className="about__social">
                        <a href="#home" className={theme ? "make-dark icons" : "icons"}><i className="fas fa-envelope-open-text"></i></a>
                        <a href="https://github.com/ashrafcoding" className={theme ? "make-dark icons icons" : "icons"} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="http://ashrafeid.co.uk" className={theme ? "make-dark icons" : "icons"} target="_blank" rel="noreferrer"><i className="fas fa-link"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )     
}

export default About
