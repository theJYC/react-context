import React from "react"
import ReactDOM from "react-dom"

import "./style.css"
import App from "./App"

//importing ThemeContext in order to establish Provider below:
import ThemeContext from "./themeContext"

const {Provider} = ThemeContext

//wrapping App around context provider, passing in value:
ReactDOM.render(
    <Provider value={"dark"}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
