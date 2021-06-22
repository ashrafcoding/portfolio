import React, {useState} from 'react'
import './navbar.css'

function Navbar({theme, callToggle}) {

    // const [dark, setDark] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = ()=> {
        setClick(!click)
    }
    // const changeTheme = ()=> {
    //     callToggle()
    //     setDark(!dark)
    // }
    let bckground = theme ? {background: "#0a192f"} : {background: "rgb(237, 249, 254)"}
    

    return (
        <header className={theme ?"l-header make-dark" : "l-header"} >
        <nav className="nav">
            <div className="logo">
                <p className="nav__logo"> &lt; Ashraf Eid /&gt;</p>
            </div>

            <div className="nav__menu" id="nav-menu">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
                </div>
                <ul className={click ? "nav__list active" : "nav__list"} style={bckground}>
                    <li className="nav__item"><a href="#home" className={theme ? "nav__link active make-dark": "nav__link active"} >Home</a></li>
                    <li className="nav__item"><a href="#about" className={theme ? "nav__link  make-dark": "nav__link "} >About</a></li>
                    <li className="nav__item"><a href="#skills" className={theme ? "nav__link  make-dark": "nav__link "} >Skills</a></li>
                    <li className="nav__item"><a href="#portfolio" className={theme ? "nav__link  make-dark": "nav__link "} >Portfolio</a></li>
                    <li className="nav__item"><a href="#contact" className={theme ? "nav__link  make-dark": "nav__link "}>Contact</a></li>
                    <li className="nav__item"><a href="https://drive.google.com/file/d/1HK4CwfJdXkOBwrJcAn-siokeCLT1diHc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={theme ? "nav__link  make-dark": "nav__link "}>Resume</a></li>

                </ul>
            
                <img src={theme ? "./assets/icons/light.svg" : "./assets/icons/dark.svg"} alt="" onClick={callToggle}/> 
                              
            </div>            
        </nav>
    </header>

    ) 
}

export default Navbar
