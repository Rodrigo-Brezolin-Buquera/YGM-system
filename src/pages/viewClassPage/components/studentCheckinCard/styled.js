import styled from "styled-components"
import { darkNeutralColor, lightNeutralColor, primaryColor } from "../../../../constants/colors"

export const StudentCard = styled.div`
display:flex;
justify-items: center;
align-items: center;
background-color: ${lightNeutralColor};
border-radius:8px;
margin: 0.5em;
padding: 0.2em;
&:hover {
    cursor: pointer;
}    
`
export const IconCont = styled.div`
color: ${props => props.type ? "green" : "black"};

&:hover {
    cursor: pointer;
}
`

export const LineContainer = styled.div`
display:flex;
justify-items: center;
align-items: center;
&:hover {
    cursor: pointer;
}
`