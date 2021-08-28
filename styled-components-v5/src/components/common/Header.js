import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"

const HeaderWrapper = styled.div`
    border-bottom: 3px solid #efefef;
    padding: 1rem;
    display: flex;

    .nav-item {
        text-transform: uppercase;

        a {
            padding: 1rem;
        }
    }
    .nav-item-active {
        text-transform: uppercase;

        a {
            padding: 1rem;
            background: var(--light-blue);
        }
    }
`

const Header = () => {
    const { pathname } = useLocation()
    return (
        <HeaderWrapper>
            <div className={pathname === "/" ? "nav-item-active" : "nav-item"}>
                <Link to="/">Home</Link>
            </div>

            <div className={pathname === "/login" ? "nav-item-active" : "nav-item"}>
                <Link to="/login">Login</Link>
            </div>
        </HeaderWrapper>
    )
}

export { Header }
