import styled from "styled-components";
import {  lightNeutralColor } from "../../constants/colors";

export const MainContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
background-color: ${lightNeutralColor};
min-height: 100vh;
`;
export const LoginForm = styled.form`
display: flex;
flex-direction:column;
align-items:center;
gap: 0.1em;
min-width: 300px;
`;
export const BoxContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
margin-top: 1em;
border-radius:25px;
`;
