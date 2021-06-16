import React from 'react'
import './footer.css'

function Footer({theme}) {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__data">
                    <h2 className="footer__title">ASHRAF EID</h2>
                    <p className="footer__text">I'm Ashraf Eid and this is my personal website</p>
                </div>

                <div className="footer__data">
                    <h2 className="footer__title">EXPLORE</h2>
                    <ul>
                        <li><a href="#home" className={theme ? "make-dark" : ""}>Home</a></li>
                        <li><a href="#about" className={theme ? "make-dark" : ""}>About</a></li>
                        <li><a href="#skills" className={theme ? "make-dark" : ""}>Skills</a></li>
                        <li><a href="#portfolio" className={theme ? "make-dark" : ""}>Portfolio</a></li>
                        <li><a href="#Contact" className={theme ? "make-dark" : ""}>Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer__data">
                    <h2 className="footer__title">FOLLOW</h2>
                    <a href="#home" className={theme ? "make-dark icons" : "icons"}><i className="fas fa-envelope-open-text"></i></a>
                    <a href="https://github.com/ashrafcoding" className={theme ? "make-dark icons" : "icons"} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="http://ashrafeid.co.uk" className={theme ? "make-dark icons" : "icons"} target="_blank" rel="noreferrer"><i className="fas fa-link"></i></a>
                </div>    
            </div>
        </footer>
    )
}

export default Footer
