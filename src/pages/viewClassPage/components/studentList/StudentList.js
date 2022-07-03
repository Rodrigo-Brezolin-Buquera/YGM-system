import React from 'react'
import { Typography } from '@material-ui/core';
import StudentCheckinCard from "../studentCheckinCard/StudentCheckinCard"

const StudentList = ({ checkins }) => {
    const studentList = checkins?.length && checkins.map((checkin) => {
        return (
            <StudentCheckinCard
                key={checkin.id}         
                id={checkin.id}
                verified={checkin.verified}
                name={checkin.name}
            />
        )
    })
    return (
        <>
            <Typography variant="h6" > Lista de checkins: </Typography>
            {checkins?.length ? studentList : <p> Não há check-ins até o momento </p>}
        </>
    )
}

export default StudentList