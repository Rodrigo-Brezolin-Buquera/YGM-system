import styled from "styled-components";
import { primaryColor } from "../../../constants/colors";


export const Form = styled.form`
min-width: 300px;
max-width: 95%;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap: 1em;

`;

export const BoxContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
padding: 1em;
background-color: ${primaryColor};
margin-top: 1em;
border-radius:25px;
`;

