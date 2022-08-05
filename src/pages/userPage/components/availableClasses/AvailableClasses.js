import React from 'react'
import { ClassesListContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import ClassesCard from '../classesCard/ClassesCard';


const AvailableClasses = ({ yogaClasses, checkins, contractId, loading, setLoading }) => {
    const classesList = yogaClasses.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}
                yogaClassId={yogaClass.id}
                day={yogaClass.day}
                time={yogaClass.time}
                teacher={yogaClass.teacher}
                name={yogaClass.name}
                checkins={checkins}
                contractId={contractId}
                loading={loading}
                setLoading={setLoading}
            />
        )
    })

    return (
        <ClassesListContainer>
            <Typography variant="h6" > Faça seu check-in:</Typography>
            {classesList.length ? classesList : <p> Não há aulas disponíveis </p>}
        </ClassesListContainer>
    )
}

export default AvailableClasses
