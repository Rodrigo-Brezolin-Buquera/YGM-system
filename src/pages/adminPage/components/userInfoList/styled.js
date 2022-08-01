import styled from "styled-components"
import { darkNeutralColor, lightNeutralColor } from "../../../../constants/colors"

export const InfoContainer = styled.div`
display: flex;
padding: 0.5em;
border-radius:8px;
border: 0.5px solid ${darkNeutralColor};
min-width: 250px;
gap: 0.5em;
background-color: ${lightNeutralColor};
&:hover {
    cursor: pointer;
}

@media (max-width: 480px) {
    width: 90vw;
    min-width: 50px;
  }

`

export const LineContainer = styled.div`
display: flex;
gap: 0.3em;
justify-content:flex-start;
margin: 0.1em;

@media (max-width: 480px) {
    flex-direction: column;;
  }
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
min-width: 250px;

@media (max-width: 480px) {
    min-width: 100px;
  }
`

