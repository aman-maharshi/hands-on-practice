import { useState } from "react"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { Toggle } from "./Toggle"

const HeaderWrapper = styled.div`
    border-bottom: 3px solid ${props => props.theme.grayBorder};
    display: flex;
    position: relative;
    padding: 0 2rem;
    background: ${props => props.theme.whiteBg};

    @media (max-width: 576px) {
        padding: 0;
        flex-direction: column;
        border-bottom: none;
    }

    .toggle-btn {
        display: none;

        @media (max-width: 576px) {
            font-family: "PT Sans", sans-serif;
            display: block;
            font-size: 1.6rem;
            padding: 5px;
            border: none;
            background: none;
            margin-left: auto;
            margin-right: 5px;
            font-weight: bold;
        }
    }

    nav {
        margin-left: auto;
        display: flex;
        transition: all 0.5s ease;

        @media (max-width: 576px) {
            top: 3rem;
            position: absolute;
            transform: translateX(100%);
            width: 100%;
            flex-direction: column;
            border-bottom: 3px solid ${props => props.theme.grayBorder};
        }
    }

    nav.show {
        @media (max-width: 576px) {
            transform: translateX(0);
            background: ${props => props.theme.grayBg};
        }
    }

    .logo {
        text-transform: uppercase;
        text-align: center;
        display: flex;

        a {
            padding: 1rem;
            background: none;
        }

        @media (max-width: 576px) {
            position: absolute;
        }
    }

    .nav-item {
        text-transform: uppercase;
        text-align: center;
        display: flex;

        a {
            width: 100%;
            padding: 1rem;
        }
    }
    .nav-item-active {
        text-transform: uppercase;

        a {
            color: ${props => props.theme.lightBlue};
        }
    }
`

const Header = ({ toggleState, setToggleState }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const { pathname } = useLocation()
    return (
        <HeaderWrapper>
            <button className="toggle-btn" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                &#9776;
            </button>
            <div className="logo">
                <Link to="/" onClick={() => setShowMobileMenu(false)}>
                    Aman Maharshi
                </Link>
            </div>
            <nav className={showMobileMenu ? "show" : null}>
                <Toggle toggleState={toggleState} setToggleState={setToggleState} />

                <div className={pathname === "/blog" ? "nav-item nav-item-active" : "nav-item"}>
                    <Link to="/blog">Blog</Link>
                </div>

                <div className={pathname === "/projects" ? "nav-item nav-item-active" : "nav-item"}>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </HeaderWrapper>
    )
}

export { Header }
