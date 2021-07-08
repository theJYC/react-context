import React from "react"

//creating context and assigning the ThemeContext constant variable
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    render() {
        return (
            <Provider value={"dark"}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
