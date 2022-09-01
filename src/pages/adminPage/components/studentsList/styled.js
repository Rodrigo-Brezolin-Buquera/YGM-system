import styled from "styled-components"
import { cellMaxWidth } from "../../../../constants/responsiveness"


export const List = styled.div`
display:flex;
flex-direction:column;
gap: 0.5em;
width: 70%;
margin: 0 1em;
`

export const FilterContainer = styled.div`
display:flex;

@media (max-width: ${cellMaxWidth}) {
    flex-direction: column;
    width: 90vw;
  }

`

// export const Select = styled.select`
// font-size: 1em;
// padding: 0.5em;
// margin: 0.5em;
// border: none;
// border-radius: 3px;

// `