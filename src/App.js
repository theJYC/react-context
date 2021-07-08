import React from "react"

import Header from "./Header"
import Button from "./Button"

import {ThemeContextConsumer} from "./themeContext"

function App() {
  return (
    <>
      <Header/>
      <ThemeContextConsumer>
          {context => (
            <Button theme={context.theme} toggleTheme={context.toggleTheme}/>
          )}
      </ThemeContextConsumer>
      <Button/>
    </>
  )
}

export default App
