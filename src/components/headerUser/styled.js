import styled from "styled-components"
import { darkNeutralColor } from "../../constants/colors"


export const HeaderContainer = styled.div`
background-color: ${darkNeutralColor};
display: flex;
justify-content: space-between;     
align-items: center;               
height:60px;
/* width:100vw; */
padding: 0.3em;
`

export const Logo = styled.img`
max-height: 50px;
`

export const ButtonContainer = styled.div`
display:flex;
gap: 0.2em;
margin-right: 0.2em;
`


