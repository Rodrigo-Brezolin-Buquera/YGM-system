import styled from "styled-components"
import { primaryColor, lightNeutralColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding-top: 1em;
background-color: ${lightNeutralColor};
min-height: 100vh;
`

export const Logo = styled.img`
max-width: 300px;
margin-top: 1em;
`