import React from 'react'
import Typography from '@material-ui/core/Typography';
import { TextContainer } from './styled';

const ClassInfo = (props) => {

    return (
   
        <TextContainer>
            <Typography variant="h6" > Informações da aula: </Typography>
            <Typography  > Dia: {props.day} - {props.time} </Typography>
            <Typography  > Data: {props.date} </Typography>
            <Typography> Prof.: {props.teacher} </Typography>
            <Typography> Estilo:  {props.name}  </Typography>
          
        </TextContainer>

    )
}

export default ClassInfo
