import styled from "styled-components"
import {darkNeutralColor, secondaryColor,lightNeutralColor } from "../../constants/colors"

export const TextContainer = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
justify-content: center;
width: 180px;
`
export const IconCont = styled.div`

&:hover {
    cursor: pointer;
}

`

export const CardContainer = styled.div`
display:flex;
align-items: center;
gap: 1em;
border-radius:10px;

background-color: ${lightNeutralColor};
padding: 0.5em 0.5em;
color: ${darkNeutralColor}
`
