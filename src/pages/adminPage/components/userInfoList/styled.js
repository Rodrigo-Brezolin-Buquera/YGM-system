import styled from "styled-components"
import { darkNeutralColor } from "../../../../constants/colors"
import { cellMaxWidth } from "../../../../constants/responsiveness"

export const InfoContainer = styled.div`
display: flex;
padding: 0.5em;
border-radius:8px;
border: 0.5px solid ${darkNeutralColor};
min-width: 250px;
width: 90%;
gap: 0.5em;
background-color: white;
&:hover {
    cursor: pointer;
}

@media (max-width: ${cellMaxWidth}) {
    width: 90vw;
    min-width: 50px;
  }

`

export const LineContainer = styled.div`
display: flex;
gap: 0.3em;
justify-content:flex-start;
margin: 0.1em;

@media (max-width: ${cellMaxWidth}) {
    flex-direction: column;;
  }
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
min-width: 250px;

@media (max-width: ${cellMaxWidth}) {
    min-width: 100px;
  }
`

