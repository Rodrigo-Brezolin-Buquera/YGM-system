import styled from "styled-components"
import { lightNeutralColor, primaryColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
width:100%;
min-height:100vh;
justify-content:space-between;

@media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;

@media (max-width: 480px) {
    padding-bottom: 1em;
  }
`


