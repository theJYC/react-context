import React from "react"
import ReactDOM from "react-dom"

import "./style.css"
import App from "./App"
import ThemeContext from "./themeContext"

const {Provider, Consumer} = ThemeContext

ReactDOM.render(
    <Provider value={"light"}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
