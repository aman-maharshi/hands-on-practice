import React from "react"
import { Header, PageLayout } from "components/common"

function Projects({ toggleState, setToggleState }) {
    return (
        <>
            <Header toggleState={toggleState} setToggleState={setToggleState} />
            <PageLayout>
                <h3>Projects</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, dolorem fugiat veritatis excepturi maiores maxime accusantium molestiae quod qui natus!</p>
            </PageLayout>
        </>
    )
}

export default Projects
