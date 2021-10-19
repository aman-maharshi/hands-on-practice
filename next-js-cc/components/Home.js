import stylesHome from "../styles/Home.module.css"
import Link from "next/link"

const Home = ({ data }) => {
    return (
        <main className={stylesHome.main}>
            <h1 className={stylesHome.pageTitle}>Blog</h1>
            <div className={stylesHome.blogWrapper}>
                {data.map(item => {
                    return (
                        <Link href="/blog/[id]" as={`/blog/${item.id}`} key={item.id}>
                            <a className={stylesHome.blog}>
                                <h3>{item.title.substring(0, 20)}</h3>
                                <p className={stylesHome.blogDesc}>{item.body.substring(0, 80)}</p>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

export default Home
