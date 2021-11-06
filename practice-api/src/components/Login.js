import { useState } from "react"
import SignUp from "./SignUp"
import { useHistory } from "react-router-dom"
import axios from "axios"

function Login() {
    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" })
    const [loginResponse, setLoginResponse] = useState(null)
    let history = useHistory()

    const handleInputChange = e => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (loginDetails.username && loginDetails.password) {
            axios
                .post("http://localhost:8080/login", loginDetails)
                .then(function(response) {
                    if (response.data) {
                        setLoginResponse(response.data)
                        history.push(`user/${loginResponse.username}`)
                    }
                })
                .catch(function(error) {
                    console.log("Unable to login")
                })

            setLoginDetails({ username: "", password: "" })
        }
    }

    return (
        <div className="login">
            <h1 className="page-title">Login Page</h1>

            <form className="signin__form" onSubmit={handleFormSubmit}>
                <input value={loginDetails.username} onChange={handleInputChange} name="username" type="text" placeholder="username" />
                <input value={loginDetails.password} onChange={handleInputChange} name="password" type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>

            <SignUp />
        </div>
    )
}

export default Login
