import React, {useEffect, useState} from 'react'
import { CheckinCardCont } from './styled'
import Typography from '@material-ui/core/Typography';

const CheckinCard = ({checkin}) => {
   
    return (
        <CheckinCardCont>
            <Typography component="subtitle2" style={{ fontWeight: 600 }}> {checkin.date}</Typography>
            
        </CheckinCardCont>
    )
}

export default CheckinCard
