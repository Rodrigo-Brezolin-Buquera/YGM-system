import React, { useState, useEffect } from 'react'
import { CardContainer, TextContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import { createCheckin, deleteCheckin } from '../../../../services/requests/bookingRequests';


const ClassesCard = (props) => {
    const { contractId, yogaClassId, checkins, day, time, teacher, name } = props
    const checkinId = `${contractId}+${yogaClassId}`
    const checkinDone = checkins?.length && checkins.find((checkin) => checkin.id === checkinId)

    const [checkin, setCheckin] = useState(checkinDone);

    const handleCheckin = () => {

        if (checkin) {
            if (window.confirm("Você quer cancelar este checkin?")) {
            deleteCheckin(checkinId) 
            // setCheckin(false)
            }
        } else {
            if (window.confirm("Você quer agendar o checkin neste horário")) {
                createCheckin(contractId, yogaClassId)
                // setCheckin(true)
            }
        }
    }

    useEffect(() => {

    }, [handleCheckin, checkins, checkin])

    return (
        <CardContainer onClick={() => handleCheckin() } checkin={checkin} >
            <TextContainer>
                <Typography component="subtitle2" style={{ fontWeight: 600 }} > {day} - {time}</Typography>
                <Typography>  {name}  </Typography>
                <Typography> {teacher}   </Typography>   
            </TextContainer>
        </CardContainer>
    )
}

export default ClassesCard
