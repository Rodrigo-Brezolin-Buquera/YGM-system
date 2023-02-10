import styled from "styled-components";
import { cellMaxWidth } from "../../../../constants/responsiveness";


export const List = styled.div`
display:flex;
flex-direction:column;
align-items: flex-start;
gap: 0.5em;
width: 100%;
margin: 0.5em ;
`;

export const FilterContainer = styled.div`
display:flex;
gap: 1em;

@media (max-width: ${cellMaxWidth}) {
    flex-direction: column;
    width: 90vw;
  }

`;
