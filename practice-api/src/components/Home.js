import React from "react"
import { useParams } from "react-router-dom"

function Home() {
    let { id } = useParams()

    return (
        <div>
            <h1 className="page-title">Home Page</h1>
            <h3>Welcome {id}</h3>
        </div>
    )
}

export default Home
