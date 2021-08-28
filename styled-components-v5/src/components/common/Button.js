import styled from "styled-components"

const Button = styled.button`
    padding: 1rem;
    font-size: 1rem;
    background: var(--light-blue);
    color: var(--text);
    border: none;
    font-family: "PT Sans", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:disabled {
        background: lightgray;
    }
`
export { Button }
