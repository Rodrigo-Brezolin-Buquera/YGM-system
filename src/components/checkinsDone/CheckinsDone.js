import React from 'react'
import {CheckinsContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import CheckinCard from '../checkinCard/CheckinCard';

const CheckinsDone = ({checkins}) => {
    const checkinsList = checkins?.length && checkins.map((checkin) => {
        return (
            <CheckinCard
                key={checkin.id }
                checkin={checkin}                
            />
        )
    })
    
    return ( 
        <CheckinsContainer>
            <Typography variant="h6" > Checkins realizados: </Typography>
            { checkins?.length ? checkinsList : <p> Não há check-ins no momento </p> }
        </CheckinsContainer>
    )
}

export default CheckinsDone
