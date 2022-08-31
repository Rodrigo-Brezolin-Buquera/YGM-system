import styled from "styled-components"

export const PlanForm = styled.form`
display: flex;
flex-direction:column;
align-items:flex-start;
`

export const FormLine = styled.div`
display: flex;
align-items:center;
gap: 0.5em;
`

export const Input = styled.input`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
background: white;
border: none;
border-radius: 3px;
`
export const Select = styled.select`
font-size: 1em;
padding: 0.5em;
margin: 0.5em;
background: white;
border: none;
border-radius: 3px;
::placeholder {
color: #1A173B;
}
`
