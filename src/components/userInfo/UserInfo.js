import React from 'react'
import { InfoContainer, FlexContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import { goToViewContract } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import moment from 'moment';

const UserInfo = (props) => {
    
    const history = useHistory()

    return (

        <InfoContainer onClick={() => goToViewContract(history, props.id)} >
            <Typography variant="h6">Informações gerais</Typography>
            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }} >Nome:</Typography>
                <Typography component="p">{props.name}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Plano: </Typography>
                <Typography component="p">{props.type} {props.frequency} na semana</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Início do plano: </Typography>
                <Typography component="p"> {moment(props.planStarted).format("DD/MM/YY")}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Fim previsto: </Typography>
                <Typography component="p"> {moment(props.planEnds).format("DD/MM/YY")}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Aulas totais: </Typography>
                <Typography component="p">{props.totalClasses}</Typography>
            </FlexContainer>

            <FlexContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }}>Aulas disponíveis:</Typography>
                <Typography component="p">{props.avaliableClasses}</Typography>
            </FlexContainer>
        </InfoContainer>
    )
}

export default UserInfo
