import styled from "styled-components"
import { lightNeutralColor } from "../../../../constants/colors"
import { cellMaxWidth } from "../../../../constants/responsiveness"

export const StudentCard = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: ${lightNeutralColor};
border-radius:8px;
margin: 0.5em;
padding: 0.2em;
width:90%;
height:60px;

@media (max-width: ${cellMaxWidth}) {
    width:75%;
}

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