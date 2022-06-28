import React from 'react'
import { InfoContainer, LineContainer, ColumnContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import { goToViewContract } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";


const UserInfoList = (props) => {
    
    const history = useHistory()

    return (

        <InfoContainer 
        status={props.status} 
        onClick={() => goToViewContract(history, props.id)} 
        >

            <ColumnContainer>
                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }} >Nome:</Typography>
                    <Typography component="p">{props.name}</Typography>
                </LineContainer>

                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Plano: </Typography>
                    <Typography component="p">{props.plan}</Typography>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>
                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Início do plano: </Typography>
                    <Typography component="p">{props.started}</Typography>
                </LineContainer>

                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Fim previsto: </Typography>
                    <Typography component="p"> {props.ends}</Typography>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>
             
                <LineContainer>
                    <Typography component="subtitle2" style={{ fontWeight: 600 }}>Aulas disponíveis:</Typography>
                    <Typography component="p">{props.availableClasses}</Typography>
                </LineContainer>
            </ColumnContainer>

        </InfoContainer>
    )
}

export default UserInfoList
