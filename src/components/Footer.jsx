import React from 'react'
import './footer.css'

function Footer() {
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
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#about" className="footer__link">About</a></li>
                        <li><a href="#skills" className="footer__link">Skills</a></li>
                        <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                        <li><a href="#Contact" className="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer__data">
                    <h2 className="footer__title">FOLLOW</h2>
                    <a href="#home" className="about__social-icon"><i className="fas fa-envelope-open-text"></i></a>
                    <a href="https://github.com/ashrafcoding" className="about__social-icon" target="_blank"><i className="fab fa-github"></i></a>
                    <a href="http://ashrafeid.co.uk" className="about__social-icon" target="_blank"><i className="fas fa-link"></i></a>
                </div>    
            </div>
        </footer>
    )
}

export default Footer
