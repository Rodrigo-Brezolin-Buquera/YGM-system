import React from 'react'
import { Text } from '@chakra-ui/react'
import StudentCheckinCard from "../studentCheckinCard/StudentCheckinCard"

const StudentList = ({ checkins, loading, setLoading }) => {
    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}         
                id={checkin.id}
                verified={checkin.verified}
                name={checkin.name}
                loading={loading} 
                setLoading={setLoading}
            />
        )
    })
    return (
        <>
            <TExt fontSize='xl' > Lista de checkins: </TExt>
            {checkins?.length ? studentList : <p> Não há check-ins até o momento </p>}
        </>
    )
}

export default StudentList