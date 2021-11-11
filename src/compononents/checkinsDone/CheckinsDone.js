import React, {useEffect, useState}from 'react'
import {CheckinsContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import CheckinCard from '../checkinCard/CheckinCard';
import { getCheckinsByPlan } from '../../services/checkins';

const CheckinsDone = (props) => {
    const [checkins, setCheckins] = useState([])
    const planId = props.user.plans[0].id
    
    useEffect(() => {
        getCheckinsByPlan(planId, setCheckins )
    }, [])

    const checkinsList = checkins.length && checkins.map((checkin) => {
        return (
            <CheckinCard
                key={checkin.classId + checkin.planId }
                classId={checkin.classId}          
            />
        )
    })
    
    return ( 
        <CheckinsContainer>
            <Typography variant="h6" > Checkins realizados: </Typography>
            { checkins.length ? checkinsList : <p> Não há check-ins no momento </p> }
        </CheckinsContainer>
    )
}

export default CheckinsDone
