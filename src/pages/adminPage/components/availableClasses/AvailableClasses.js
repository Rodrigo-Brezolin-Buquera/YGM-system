import React from 'react'
import { ClassesListContainer } from './styled'
import { Text } from '@chakra-ui/react'
import ClassesCard from '../classesCard/ClassesCard';

const AvailableClasses = ({ yogaClasses, history }) => {
    const classesList = yogaClasses.length && yogaClasses.map((yogaClass) => {
        return (
            <ClassesCard
                key={yogaClass.id}
                id={yogaClass.id}
                day={yogaClass.day}
                time={yogaClass.time}
                teacher={yogaClass.teacher}
                name={yogaClass.name}
                history={history} 
            />
        )
    })

    return (
        <ClassesListContainer>
            <Text fontSize='xl' > Aulas de hoje:</Text>
            {classesList.length ? classesList : <p> Não há aulas hoje </p>}
        </ClassesListContainer>
    )
}

export default AvailableClasses
