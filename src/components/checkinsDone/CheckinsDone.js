import React from 'react'
import {CheckinsContainer } from './styled'
import {Text} from '@chakra-ui/react';
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
            <Text > Checkins realizados: </Text>
            { checkins?.length ? checkinsList : <p> Não há check-ins no momento </p> }
        </CheckinsContainer>
    )
}

export default CheckinsDone
