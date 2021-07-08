import React from "react"
import ReactDOM from "react-dom"

import "./style.css"
import App from "./App"

//importing ThemeContextProvider class component:
import {ThemeContextProvider} from "./themeContext"

//wrapping App around context provider, passing in value:
ReactDOM.render(
    <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>,
    document.getElementById("root")
)
