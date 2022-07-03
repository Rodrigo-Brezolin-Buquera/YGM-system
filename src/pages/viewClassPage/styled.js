import styled from "styled-components"
import { darkNeutralColor,primaryColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
justify-content: space-between;            
width:100%;
min-height:100vh;
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;
align-items:center;
`

export const CenterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: top; 
align-items:center;
padding-top: 1em;;
width:100%;
`
