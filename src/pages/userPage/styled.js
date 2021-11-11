import styled from "styled-components"
import { lightNeutralColor, primaryColor } from "../../constants/colors"

export const MainContainer = styled.div`
display:flex;
min-height:100vh;
background-color:${lightNeutralColor};
`

export const CentralContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;
gap: 3em;
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;

`


