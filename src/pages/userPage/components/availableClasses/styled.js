import styled from "styled-components";
import { cellMaxWidth } from "../../../../constants/responsiveness";

export const ClassesListContainer = styled.div`
padding: 0.1em;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
gap:0.5em;
width:100%;
@media (max-width: ${cellMaxWidth}) {
  padding-bottom: 1em;
  }
`;

