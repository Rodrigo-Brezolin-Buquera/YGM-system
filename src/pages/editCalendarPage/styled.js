import styled from "styled-components"
import { primaryColor, lightNeutralColor } from "../../constants/colors"

export const LowerContainer = styled.div`
display: flex;
background-color:${lightNeutralColor};
`

export const LinearContainer = styled.div`
display: flex;
flex-direction: row;
gap: 0.5em;
padding: 1em;
width:100%;
justify-content: space-evenly;
`

