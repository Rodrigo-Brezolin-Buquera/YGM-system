import styled from "styled-components"
import { lightNeutralColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
min-width: 100vw;
min-height:100vh;
background-color:${lightNeutralColor};
gap: 0.5em;
padding: 0.5em;
`

// export const ColumnContainer = styled.div`
// display: flex;
// flex-direction: column;
// align-items:center;
// background-color:${lightNeutralColor};
// gap: 0.5em;
// padding: 0.5em;
// `

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
gap: 0.5em;
padding: 0.5em;
`