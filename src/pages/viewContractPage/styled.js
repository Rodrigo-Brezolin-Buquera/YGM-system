import styled from "styled-components"
import { primaryColor, lightNeutralColor } from "../../constants/colors"
import {cellMaxWidth} from "../../constants/responsiveness"

export const MainContainer = styled.div`
display: flex;
min-height: 100vh;
background-color:${lightNeutralColor};
gap: 0.5em;

@media (max-width: ${cellMaxWidth}) {
  flex-direction: column-reverse;
  }
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
gap: 0.5em;
min-width:300px;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
align-items:center;
gap: 0.5em;
padding: 0.5em;
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;
min-height:100vh;

`
