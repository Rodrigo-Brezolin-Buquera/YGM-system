import styled from "styled-components"
import { darkNeutralColor, lightNeutralColor, primaryColor } from "../../constants/colors"

export const InfoContainer = styled.div`
display: flex;
padding: 0.5em;
border-radius:8px;
border: 1px solid ${darkNeutralColor};
min-width: 250px;
gap: 0.5em;
background-color: ${(props) => props.status === 0 && "lightgray" };
`

export const LineContainer = styled.div`
display: flex;
gap: 0.3em;
justify-content:flex-start;
margin: 0.1em;

`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
min-width: 250px;
`

