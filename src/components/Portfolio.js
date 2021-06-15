import React from 'react'
import { porojects } from "./iconlist";
import './portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            <div className="line"></div>

            <div className="portfolio__container bd-grid">
                {porojects.map((project, index)=>(
                    <div className="portfolio__img" key={index} >
                        <img src={project.src} alt="" data-aos="slide-up" data-aos-delay={index*100}/>
                        <div className="external-link">
                            <div className="portfolio__link">
                                <a href={project.link} className="portfolio__link-name" target="_blank">View details</a>                      
                            </div>  
                            <div className="portfolio__link github-source">
                                <a href={project.source} className="portfolio__link-name " target="_blank">View source</a>                      
                            </div>  
                        </div>                 
                    </div>
                ))}               
            </div>
        </div>
    )
}

export default Portfolio
