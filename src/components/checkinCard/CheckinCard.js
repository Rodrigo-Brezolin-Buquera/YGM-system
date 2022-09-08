import React from 'react'
import { CheckinCardCont } from './styled'
import {Text} from '@chakra-ui/react';

const CheckinCard = ({checkin}) => {
   
    return (
        <CheckinCardCont>
            <Text > {checkin.date}</Text>    
        </CheckinCardCont>
    )
}

export default CheckinCard
