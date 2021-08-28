import { Button } from "components/common"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        --heading-text: #323B3C;
        --text: #516163;
        --light-blue: #CCE8E5;
    }
    body {
        margin: 0;
        font-family: 'PT Sans', sans-serif;
        min-height: 90vh;
        margin: 0;
        color: var(--text)
    }

    * {
        box-sizing: border-box;
    }
`

const AppWrapper = styled.div`
    padding: 1rem;
    border: 1px solid lightgray;
    width: 700px;
    margin: 3rem auto 1rem;

    h3 {
        color: var(--heading-text);
    }
`

function App() {
    return (
        <div>
            <GlobalStyle />
            <AppWrapper>
                <h3>Hello there!</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, dolorem fugiat veritatis excepturi maiores maxime accusantium molestiae quod qui natus!</p>
                <Button>lorem</Button>
            </AppWrapper>
        </div>
    )
}

export default App
