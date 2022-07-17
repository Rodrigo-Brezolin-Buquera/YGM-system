import React from 'react'
import { CardContainer, TextContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import { goToViewClass } from "../../../../routes/coordinator";

const ClassesCard = (props) => {
    return (
        <CardContainer onClick={ () => goToViewClass(props.history, props.id)} >
            <TextContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }} > {props.day} - {props.time}</Typography>
                <Typography> {props.teacher} - {props.name}  </Typography>
            </TextContainer>
        </CardContainer>
    )
}

export default ClassesCard
