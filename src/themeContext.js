import React from "react"

//creating context and assigning the ThemeContext constant variable
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {

    state = {
        theme : "light"
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme == "light" ? "dark" : "light"
            }
        })
    }
    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
