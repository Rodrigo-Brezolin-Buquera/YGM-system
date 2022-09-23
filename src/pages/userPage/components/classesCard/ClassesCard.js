import React, { useState, useEffect } from 'react'
import { CardContainer, TextContainer } from './styled'
import { Text, CircularProgress } from '@chakra-ui/react';
import { createCheckin, deleteCheckin } from '../../../../services/requests/bookingRequests';

const ClassesCard = (props) => {
    const { contractId, yogaClassId, checkins, day, time, teacher, name, capacity, loading, setLoading } = props
    const checkinId = `${contractId}+${yogaClassId}`
    const checkinDone = checkins?.length && checkins.find((checkin) => checkin.id === checkinId)
    const [checkin, setCheckin] = useState(checkinDone);

    const handleCheckin = async () => {
        if (checkin && capacity ===0) {
            if (window.confirm("Cancelar este checkin?")) {
                setLoading(true)
                await deleteCheckin(checkinId, setCheckin)
                setLoading(false)
            }
        } else if (!checkin  && capacity >0) {
            if (window.confirm("Agendar o checkin neste horário?")) {
                setLoading(true)
                await createCheckin(contractId, yogaClassId, setCheckin)
                setLoading(false)

            }
        } else if ( !checkin && capacity ===0) {
            alert("Não há mais vagas nesse horário")
        }
    }

    useEffect(() => {

    }, [handleCheckin, checkins, checkin])

    return (
        <CardContainer onClick={() => handleCheckin()} checkin={checkin} >
            {loading ? <CircularProgress isIndeterminate color="yellow.400" size="75px" /> :
                <TextContainer>
                    <Text fontSize='lg' as="b" > {day} - {time}</Text>
                    {capacity > 0 ?
                    <>
                        <Text>  {name}  </Text>
                        <Text> {teacher}   </Text>
                    </>
                        :
                        <Text  > Não há mais vagas </Text>
                    }
                </TextContainer>
            }
        </CardContainer>
    )
}

export default ClassesCard
