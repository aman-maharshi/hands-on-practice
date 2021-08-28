import React from "react"
import { Button } from "components/common"

function Home() {
    return (
        <>
            <h3>Home</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, dolorem fugiat veritatis excepturi maiores maxime accusantium molestiae quod qui natus!</p>
            <Button>default</Button>
            <Button secondary>secondary</Button>
            <Button disabled>disabled</Button>
        </>
    )
}

export default Home
