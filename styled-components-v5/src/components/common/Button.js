import styled, { css } from "styled-components"

const Button = styled.button`
    background: ${props => (props.secondary ? "#edefef" : "var(--light-blue)")};
    color: var(--text);
    border: none;
    font-family: "PT Sans", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-right: 1rem;
    cursor: pointer;

    ${props =>
        props.large
            ? css`
                  padding: 1.5rem;
                  font-size: 1.5rem;
              `
            : css`
                  padding: 1rem;
                  font-size: 1rem;
              `}

    &:disabled {
        background: lightgray;
        color: #ffffff;
        cursor: default;
    }
`

export { Button }
