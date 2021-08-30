import { createGlobalStyle } from "styled-components"
import Projects from "components/pages/Projects"
import Blog from "components/pages/Blog"
import Home from "components/pages/Home"

import { BrowserRouter, Switch, Route } from "react-router-dom"

const GlobalStyle = createGlobalStyle`
    html {
        --heading-text: #323B3C;
        --text: #516163;
        --light-blue: #CCE8E5;
    }
    body {
        margin: 0;
        font-family: 'PT Sans', sans-serif;
        min-height: 90vh;
        margin: 0;
        color: var(--text)
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: var(--heading-text);
        font-weight: bold;
        letter-spacing: 0.5px;
        text-decoration: none;
        transition: 0.3s ease;

        &:hover {
            background: #edefef;
        }
    }
`

function App() {
    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
