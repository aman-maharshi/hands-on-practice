import Head from "next/head"
import stylesHome from "../styles/Home.module.css"

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={stylesHome.main}>
                <h1 className={stylesHome.pageTitle}>Contact</h1>
            </main>
        </>
    )
}
