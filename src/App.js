import React from "react"

import Header from "./Header"
import Button from "./Button"

import ThemeContext from "./themeContext"

function App() {
  return (
    <>
      <Header/>
      <ThemeContext.Consumer>
          {theme => (
            <Button theme={theme}/>
          )}
      </ThemeContext.Consumer>
      <Button/>
    </>
  )
}

export default App
