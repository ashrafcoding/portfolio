import React, { useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./App.css";
// import themeContext, { themes } from "./ThemeContext";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    Aos.init({duration:1000})
  }, [])

  // const themes = {
  //   dark: {
  //     background: "#0a192f",
  //     color: "#ccd6f6"
  //   },
  //   light: {
  //     background: "rgb(237, 249, 254)",
  //     color: "#0a192f"
  //   }
  // }
  
  const [dark, setDark] = useState(false)
  const toggleTheme = ()=> {
    setDark(!dark)
  }
 
  

  
  // const [theme, setTheme] = useState(themes.dark);
  // const toggleTheme = () => {
  //   theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  // };

  return (
    // <themeContext.Provider value={theme}> 
    <div className={dark ? "make-dark": "make-light"}> 
    <div className="container" >
       <Navbar callToggle={toggleTheme} theme = {dark}/>
       <Header/>
       <About theme={dark}/>
       <Skills/>
       <Portfolio/>
       <Contact theme={dark}/>
       <Footer theme= {dark}/>   
    </div>
    </div> 
    // </themeContext.Provider>
  );
}

export default App;
