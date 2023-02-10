import styled from "styled-components";
import { primaryColor } from "../../constants/colors";
import { cellMaxWidth } from "../../constants/responsiveness";

export const CheckinsContainer = styled.div`
grid-row:2/3;
grid-column: 2/3;
border-radius:25px;
border: 3px solid ${primaryColor};
display:flex;
flex-direction:column;
gap:0.5em;
align-items:center;

@media (max-width: ${cellMaxWidth}) {
  padding-bottom: 1em;
  height:100%;
  }
`;
