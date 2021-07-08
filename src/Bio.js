import React from "react"
import ThemeContext from "./themeContext"

//destructuring the ThemeContext object to pull out ThemeContext.Consumer
const {Consumer} = ThemeContext

function Bio() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={`${theme}-theme`}>
                    <h4>This is an illustrative demo to demonstrate Context API in action.</h4>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default Bio
