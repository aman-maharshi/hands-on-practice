import React from "react"
import stylesHome from "../styles/Home.module.css"
import Link from "next/link"

const BlogArticle = ({ blogArticle }) => {
    console.log(blogArticle)
    return (
        <main className={stylesHome.main}>
            <div className={stylesHome.blogArticle}>
                <h2 className={stylesHome.pageTitle}>{blogArticle.title}</h2>
                <p>{blogArticle.body}</p>
                <Link href="/">
                    <a className={stylesHome.backBtn}>Back</a>
                </Link>
            </div>
        </main>
    )
}

export default BlogArticle
