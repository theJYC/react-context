import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )
}

Button.defaultProps = {
    theme : "light"
}
export default Button
