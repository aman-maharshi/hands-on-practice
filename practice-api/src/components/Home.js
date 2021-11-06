import React from "react"
import { Link } from "react-router-dom"
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

function Home({ loginResponse, setLoginResponse }) {
    // let { id } = useParams()
    let history = useHistory()

    const handleLogout = () => {
        setLoginResponse(null)
        history.push("/")
    }

    return (
        <>
            {loginResponse ? (
                <div className="home">
                    <header className="header">
                        <div className="home__card">
                            <div className="avatar">
                                <img src={loginResponse.avatar} alt="user-avatar" />
                            </div>
                            <h3 className="username">{loginResponse.username}</h3>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </header>
                    <div className="pageContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi natus culpa, dolor modi iste eaque neque soluta vitae explicabo ipsum tempore distinctio id asperiores itaque eligendi consectetur exercitationem facere, rerum ducimus non cum illo. Neque natus dolor autem nihil non sapiente fugiat veniam maiores, eligendi aperiam inventore sit libero delectus?</p>
                    </div>
                </div>
            ) : (
                <div className="pageContent">
                    <div className="notLoggedIn">
                        <p>Login to view this page</p>
                        <button>
                            <Link to="/">← Home</Link>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
