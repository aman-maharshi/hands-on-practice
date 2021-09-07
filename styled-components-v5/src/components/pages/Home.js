import React from "react"
import { Header, PageLayout } from "components/common"

function Home({ toggleState, setToggleState }) {
    return (
        <>
            <Header toggleState={toggleState} setToggleState={setToggleState} />
            <PageLayout>
                <h3>Home</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint mollitia nam a quod doloremque pariatur.</p>
            </PageLayout>
        </>
    )
}

export default Home
