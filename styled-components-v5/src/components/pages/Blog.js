import React from "react"
import { Button, PageLayout, Header } from "components/common"

function Blog() {
    return (
        <>
            <Header />
            <PageLayout>
                <h3>Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, dolorem fugiat veritatis excepturi maiores maxime accusantium molestiae quod qui natus!</p>
                <Button>default</Button>
                <Button secondary>secondary</Button>
                <Button disabled>disabled</Button>
            </PageLayout>
        </>
    )
}

export default Blog
