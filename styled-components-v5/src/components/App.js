import styled, { createGlobalStyle } from "styled-components"
import Login from "components/pages/Login"
import Home from "components/pages/Home"

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

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
    }
`

const AppWrapper = styled.div`
    padding: 1rem;
    border: 1px solid lightgray;
    width: 700px;
    margin: 3rem auto 1rem;
    position: relative;

    h3 {
        color: var(--heading-text);
    }
    .nav {
        position: absolute;
        right: 2rem;
        top: 2rem;
    }
`

function App() {
    return (
        <div>
            <GlobalStyle />
            <AppWrapper>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            <div className="nav">
                                <Link to="/">Home</Link>
                            </div>
                            <Login />
                        </Route>
                        <Route path="/">
                            <div className="nav">
                                <Link to="/login">Login</Link>
                            </div>
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AppWrapper>
        </div>
    )
}

export default App
