import React from "react"
import ThemeContext from "./themeContext"

function Button() {
    return (
        <ThemeContext.Consumer>
            {/* render props */}
            {theme => {
                <button className={`${theme}-theme`}>Switch Theme</button>
            }}
        </ThemeContext.Consumer>
    )
}

export default Button
