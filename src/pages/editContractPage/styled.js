import styled from "styled-components"
import { lightNeutralColor } from "../../constants/colors"
import { cellMaxWidth } from "../../constants/responsiveness"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
min-width: 100vw;
min-height:100vh;
background-color:${lightNeutralColor};
gap: 0.3em;
padding: 0.5em;
padding-top: 1em;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
gap: 0.5em;
padding: 0.5em;

@media (max-width: ${cellMaxWidth}) {
  flex-direction: column;
  }
`