import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

function App() {
    return (
        <>
            <div className="mainContent">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/user/:id">
                            <Home />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <footer className="footer">
                <p>
                    Designed and Coded by <a href="https://amanmaharshi.com">Aman Maharshi</a>
                </p>
            </footer>
        </>
    )
}

export default App
