import React, {useState} from 'react'
import './navbar.css'

function Navbar() {
    const [dark, setDark] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = ()=> setClick(!click)

    return (
        <header className="l-header">
        <nav className="nav">
            <div className="logo">
                <p className="nav__logo"> &lt; Ashraf Eid /&gt;</p>
            </div>

            <div className="nav__menu" id="nav-menu">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                </div>
                <ul className={click ? "nav__list active" : "nav__list"}>
                    <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                    <li className="nav__item"><a href="#portfolio" className="nav__link">Portfolio</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                </ul>
            
                <img src={dark ? "./assets/icons/light.svg" : "./assets/icons/dark.svg"} alt="" /> 
                              
            </div>            
        </nav>
    </header>

    ) 
}

export default Navbar
