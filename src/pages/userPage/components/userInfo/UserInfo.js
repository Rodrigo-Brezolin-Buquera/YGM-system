import React from 'react'
import { InfoContainer, FlexContainer } from './styled'
import Typography from '@material-ui/core/Typography';

const UserInfo = (props) => { 
    return (
        <InfoContainer  >
            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }} >Nome:</Typography>
                <Typography component="p">{props.name}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Plano: </Typography>
                <Typography component="p">{props.plan} </Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Início do plano: </Typography>
                <Typography component="p"> {props.planStarted}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Fim previsto: </Typography>
                <Typography component="p"> {props.planEnds}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Aulas disponíveis:</Typography>
                <Typography component="p">{props.availableClasses}</Typography>
            </FlexContainer>
        </InfoContainer>
    )
}

export default UserInfo