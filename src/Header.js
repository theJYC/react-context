import React from "react"
import ThemeContext from "./themeContext"

const {Consumer} = ThemeContext

/*
N.B. Consumer will need to follow the render prop pattern,
whereby. the context object (from the Provider) will be passed into an
anonymous function and then applied to where applicable.
*/

function Header() {
    return (
        <Consumer>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h1>{theme == "light" ? "Light" : "Dark"} Theme</h1>
                </header>
            )}
        </Consumer>
    )
}

export default Header
