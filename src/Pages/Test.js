import React from 'react';
// import Helmet from "react-helmet";


const Test = () => {

    let clickedClass = "clicked"
    const body = document.getElementById('pobittra')
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme
  
    if (localStorage) {
      theme = localStorage.getItem("theme")
    }
  
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme)
    } else {
      body.classList.add(lightTheme)
    }
  
    const switchTheme = e => {
      if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme)
        e.target.classList.remove(clickedClass)
        localStorage.setItem("theme", "light")
        theme = lightTheme
      } else {
        body.classList.replace(lightTheme, darkTheme)
        e.target.classList.add(clickedClass)
        localStorage.setItem("theme", "dark")
        theme = darkTheme
      }
    }

  return (
      <>

      {/* <Helmet>
        <html lang="en" id="test page"/>
      </Helmet> */}

      <button className={theme === "dark" ? clickedClass : ""} onClick={e => switchTheme(e)} >Click Me</button>
      </>
  )
};

export default Test;
