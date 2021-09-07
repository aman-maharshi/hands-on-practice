import { createGlobalStyle, ThemeProvider } from "styled-components"
import Projects from "components/pages/Projects"
import Blog from "components/pages/Blog"
import Home from "components/pages/Home"
import { useState } from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"

const theme = {
    headingText: "#323B3C",
    text: "#516163",
    lightBlue: "#3694ff",
    grayBg: "#fafafa",
    whiteBg: "white",
    grayBorder: "#efefef"
}

const themeDark = {
    headingText: "white",
    text: "#b5b5b5",
    lightBlue: "#3694ff",
    grayBg: "#333333",
    whiteBg: "#434343",
    grayBorder: "#5f5f5f"
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'PT Sans', sans-serif;
        min-height: 90vh;
        margin: 0;
        color: ${props => props.theme.text};
        background: ${props => props.theme.grayBg}
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: ${props => props.theme.headingText};
        font-weight: bold;
        letter-spacing: 0.5px;
        text-decoration: none;
        transition: 0.3s ease;

        &:hover {
            text-decoration: underline;
        }
    }
`

function App() {
    const [toggleState, setToggleState] = useState(false)

    return (
        <ThemeProvider theme={toggleState ? themeDark : theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/projects">
                        <Projects toggleState={toggleState} setToggleState={setToggleState} />
                    </Route>
                    <Route path="/blog">
                        <Blog toggleState={toggleState} setToggleState={setToggleState} />
                    </Route>
                    <Route path="/">
                        <Home toggleState={toggleState} setToggleState={setToggleState} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
