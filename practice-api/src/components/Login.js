import React from "react"

function Login() {
    return (
        <div className="login">
            <h1 className="page-title">Login Page</h1>

            <form className="login__form">
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>

            <form className="signup__form">
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Login
