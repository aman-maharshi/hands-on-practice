import styled from "styled-components"

const PageLayoutWrapper = styled.div`
    padding: 1rem;
    max-width: 800px;
    margin: 3rem auto 0 auto;

    @media (max-width: 576px) {
        margin-top: 0;
    }

    h3 {
        color: var(--heading-text);
    }
`

const PageLayout = ({ children }) => {
    return <PageLayoutWrapper>{children}</PageLayoutWrapper>
}

export { PageLayout }
