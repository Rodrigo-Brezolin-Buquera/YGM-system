import styled from "styled-components";
import { lightNeutralColor } from "../../constants/colors";
import { cellMaxWidth } from "../../constants/responsiveness";

export const LowerContainer = styled.div`
display: flex;
background-color:${lightNeutralColor};
padding: 0.5em;
@media (max-width: ${cellMaxWidth}) {
  height:40vh;
  }
`;

export const LinearContainer = styled.div`
display: flex;
flex-direction: row;
gap: 0.5em;
padding: 1em;
width:100%;
justify-content: space-evenly;
`;