import styled from "styled-components";
import { darkNeutralColor, lightNeutralColor, secondaryColor } from "../../../../constants/colors";

export const TextContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
width: 180px;
`;

export const CardContainer = styled.div`

display: flex ;
align-items: center;
justify-content: center;
gap: 1em;
border-radius:10px;
padding: 0.5em 0.5em;
color: ${darkNeutralColor};
width: 180px;
min-height: 60px;

${({ checkin }) => checkin ?
        `background-color: ${secondaryColor};`
        :
        `background-color: ${lightNeutralColor};`
}

&:hover {
    cursor: pointer;
}

`;
