# Context

Demonstration of React's Context API via light/dark theme toggling.

Note to self: 

- If using class-based components, you can receive the context via static method MyComponent.contextType: 

```jsx
...
import ThemeContext from "./themeContext"

class Button extends React.Component {
    render(){
        console.log(this.context) //should return the value passed into Provider
        return (
            <button className={`${this.context}-theme`}>Switch Theme</button>
        )
    }
}

//line below assigns context via static contextType method:
Button.contextType = ThemeContext
```

- If using functional components, you can receive the context via encapsulating the desired JSX output in the Consumer object (e.g. <ThemeContext.Consumer>), though you need to follow the render prop design pattern in order to make use of the context value:

```jsx 
...
import ThemeContext from "./themeContext"

function Button() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button className={`${theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContext.Consumer>
    )
}

```

[Documentation](https://github.com/jinyoungch0i/react-notes/blob/master/Context.md)
