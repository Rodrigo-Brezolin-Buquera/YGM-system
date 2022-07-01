import React from 'react'
import { ClassesListContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import ClassesCard from '../classesCard/ClassesCard';

const AvailableClasses = ({ yogaClasses }) => {

    const classesList = yogaClasses.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}
                id={yogaClass.id}
                day={yogaClass.day}
                time={yogaClass.time}
                teacher={yogaClass.teacher}
                name={yogaClass.name}
            />)
    })

    return (
        <ClassesListContainer>
            <Typography variant="h6" > Aulas de hoje:</Typography>
            {classesList.length ? classesList : <p> Não há aulas disponíveis </p>}
        </ClassesListContainer>
    )
}

export default AvailableClasses
