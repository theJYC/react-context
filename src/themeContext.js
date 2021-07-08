import React from "react"

//creating context and assigning the ThemeContext constant variable
const ThemeContext = React.createContext()

//essentially the only two objects that need to be destructured
const {Provider, Consumer} = ThemeContext

export default ThemeContext
