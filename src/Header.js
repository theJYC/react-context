import React from "react"
import ThemeContext from "./themeContext"

const {Consumer} = ThemeContext

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
