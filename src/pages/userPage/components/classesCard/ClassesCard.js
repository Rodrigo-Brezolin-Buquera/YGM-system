import React, { useState, useEffect } from 'react'
import { CardContainer, TextContainer } from './styled'
import { Text, CircularProgress } from '@chakra-ui/react';
import { createCheckin, deleteCheckin } from '../../../../services/requests/bookingRequests';



const ClassesCard = (props) => {
    const { contractId, yogaClassId, checkins, day, time, teacher, name, loading, setLoading } = props
    const checkinId = `${contractId}+${yogaClassId}`
    const checkinDone = checkins?.length && checkins.find((checkin) => checkin.id === checkinId)
    const [checkin, setCheckin] = useState(checkinDone);

    const handleCheckin = async () => {
        if (checkin) {
            if (window.confirm("Cancelar este checkin?")) {
                setLoading(true)
                await deleteCheckin(checkinId)
                setLoading(false)
                setCheckin(false)

            }
        } else {
            if (window.confirm("Agendar o checkin neste horário?")) {
                setLoading(true)
                await createCheckin(contractId, yogaClassId)
                setLoading(false)
                setCheckin(true)
            }
        }
    }

    useEffect(() => {

    }, [handleCheckin, checkins, checkin])

    return (
        <>
            

                <CardContainer onClick={() => handleCheckin()} checkin={checkin} >
                {loading ? <CircularProgress color={"inherit"} size={24} /> :
                    <TextContainer>
                        <Text fontSize='xl' > {day} - {time}</Text>
                        <Text>  {name}  </Text>
                        <Text> {teacher}   </Text>
                    </TextContainer>
}
                </CardContainer>
            
        </>
    )
}

export default ClassesCard
