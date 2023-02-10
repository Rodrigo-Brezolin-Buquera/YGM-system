import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const FlowerLogo = styled.img`
max-width: 250px;
`;

export const ErrorContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
background-color: ${primaryColor};
width:100vw;
height: 100vh;
`;

export const TextContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center; 
align-items:center;
`;