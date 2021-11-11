import styled from "styled-components"
import { primaryColor, lightNeutralColor } from "../../constants/colors"

export const LowerContainer = styled.div`
display: flex;
background-color:${lightNeutralColor};

`

export const LineContainer = styled.div`
display: flex;
gap: 0.5em;
padding: 1em;
width:100%;
justify-content: space-evenly;
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;

`

