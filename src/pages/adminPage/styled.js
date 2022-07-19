import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
width:100%;
min-height:100vh;
justify-content:space-between;
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;

`
