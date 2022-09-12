import styled from "styled-components"
import { lightNeutralColor, primaryColor } from "../../constants/colors"
import { cellMaxWidth  } from "../../constants/responsiveness"

export const MainContainer = styled.div`
display:flex;
min-height:100vh;
background-color:${lightNeutralColor};

@media (max-width: ${cellMaxWidth}) {
  flex-direction: column;
  }
`

export const CentralContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;
gap: 1em;
`

export const SideContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
background-color:${primaryColor};
min-width: 250px;
padding-top: 1em;

@media (max-width: ${cellMaxWidth}) {
  min-height: 200px;
  justify-content: center;
  }
`


