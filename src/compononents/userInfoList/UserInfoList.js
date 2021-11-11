import React, { useContext } from 'react'
import { InfoContainer, LineContainer, ColumnContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import { goToViewUser } from '../../routes/coordinator';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { useHistory } from "react-router-dom";


const UserInfoList = (props) => {
    const { setters, states } = useContext(GlobalStateContext);
    const history = useHistory()

    return (

        <InfoContainer 
        status={props.status} 
        onClick={states.admin ? () => goToViewUser(history, props.id) : null} 
        >

            <ColumnContainer>
                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }} >Nome:</Typography>
                    <Typography component="p">{props.name}</Typography>
                </LineContainer>

                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Plano: </Typography>
                    <Typography component="p">{props.type} {props.frequency} na semana</Typography>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>
                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Início do plano: </Typography>
                    <Typography component="p">{props.planStarted}</Typography>
                </LineContainer>

                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Fim previsto: </Typography>
                    <Typography component="p"> {props.planEnds}</Typography>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>
                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Aulas totais: </Typography>
                    <Typography component="p">{props.totalClasses}</Typography>
                </LineContainer>

                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Aulas disponíveis:</Typography>
                    <Typography component="p">{props.avaliableClasses}</Typography>
                </LineContainer>
            </ColumnContainer>

        </InfoContainer>
    )
}

export default UserInfoList
