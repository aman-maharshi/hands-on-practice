import styled from "styled-components"

const PageLayoutWrapper = styled.div`
    padding: 1rem;
    max-width: 1000px;
    margin: 2rem auto 0 auto;
    background: ${props => props.theme.whiteBg};

    @media (max-width: 576px) {
        margin-top: 0;
    }

    h3 {
        color: ${props => props.theme.headingText};
    }
`

const PageLayout = ({ children }) => {
    return <PageLayoutWrapper>{children}</PageLayoutWrapper>
}

export { PageLayout }
