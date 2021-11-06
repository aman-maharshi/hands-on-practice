import { useState, useEffect } from "react"
import axios from "axios"

function SignUp() {
    const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
    const [signUpResponse, setSignUpResponse] = useState(null)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let hideMessage = setTimeout(() => setMessage(""), 2500)

        return () => {
            clearTimeout(hideMessage)
        }
    }, [message])

    const handleInputChange = e => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        if (userDetails.username && userDetails.email && userDetails.password) {
            setLoading(true)
            axios
                .post("http://localhost:8080/register", userDetails)
                .then(function(response) {
                    setSignUpResponse(response.data)
                    setMessage("SignUp Successful")
                    setLoading(false)
                })
                .catch(function(error) {
                    // console.log(error.response)
                    setMessage("Unable to SignUp!")
                    setLoading(false)
                })
        }

        setUserDetails({ username: "", email: "", password: "" })
    }

    return (
        <form className="signup__form" onSubmit={handleFormSubmit}>
            <input value={userDetails.username} onChange={handleInputChange} type="text" name="username" placeholder="username" />
            <input value={userDetails.email} onChange={handleInputChange} type="email" name="email" placeholder="email" />
            <input value={userDetails.password} onChange={handleInputChange} type="password" name="password" placeholder="password" />
            <button type="submit">Sign Up {loading && <img src="/spinner.gif" />}</button>
            <p className="message">{message}</p>
        </form>
    )
}

export default SignUp