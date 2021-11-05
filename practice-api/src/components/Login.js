import React from "react"
import SignUp from "./SignUp"

function Login() {
    return (
        <div className="login">
            <h1 className="page-title">Login Page</h1>

            <form className="signin__form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>

            <SignUp />
        </div>
    )
}

export default Login
