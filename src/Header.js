import React from "react"
import {ThemeContextConsumer} from "./themeContext"

/*
N.B. Consumer will need to follow the render prop pattern,
whereby. the context object (from the Provider) will be passed into an
anonymous function and then applied to where applicable.
*/

function Header() {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h1>{context.theme == "light" ? "Light" : "Dark"} Theme</h1>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header
