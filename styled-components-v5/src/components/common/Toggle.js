import styled from "styled-components"

const ToggleWrapper = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto 1rem;
    display: flex;
    background: black;
    cursor: pointer;
`

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border-radius: 25px;
    margin-top: 1px;
    background: white;
    border: 1px solid #666;
    transition: transform 0.2s linear;
    transform: ${props => (props.isActive ? "translate(25px)" : "translate(1px)")};
`

const Toggle = ({ toggleState, setToggleState }) => {
    return (
        <ToggleWrapper onClick={() => setToggleState(!toggleState)}>
            <Notch isActive={toggleState}></Notch>
        </ToggleWrapper>
    )
}

export { Toggle }
