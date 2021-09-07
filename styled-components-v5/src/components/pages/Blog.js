import React from "react"
import { PageLayout, Header } from "components/common"

function Blog({ toggleState, setToggleState }) {
    return (
        <>
            <Header toggleState={toggleState} setToggleState={setToggleState} />
            <PageLayout>
                <h3>Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, dolorem fugiat veritatis excepturi maiores maxime accusantium molestiae quod qui natus!</p>
            </PageLayout>
        </>
    )
}

export default Blog
