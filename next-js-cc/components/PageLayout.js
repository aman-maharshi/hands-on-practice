import React from "react"
import Link from "next/link"
import stylesLayout from "../styles/Layout.module.css"

const PageLayout = ({ children }) => {
    return (
        <>
            <div className={stylesLayout.nav}>
                <ul className={stylesLayout.nav__items}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            {children}

            <footer className={stylesLayout.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    &copy; Lorem, ipsum dolor.
                </a>
            </footer>
        </>
    )
}

export default PageLayout
