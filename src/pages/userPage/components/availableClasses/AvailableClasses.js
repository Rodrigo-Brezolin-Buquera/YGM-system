import React from 'react'
import { ClassesListContainer } from './styled'
import ClassesCard from '../classesCard/ClassesCard';
import { Text } from '@chakra-ui/react'


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
                capacity={yogaClass.capacity}
                checkins={checkins}
                contractId={contractId}
                loading={loading}
                setLoading={setLoading}
            />
        )
    })

    return (
        <ClassesListContainer>
            <Text fontSize='lg' as="b" > Faça seu check-in:</Text>
            {classesList.length ? classesList : <p> Não há aulas disponíveis </p>}
        </ClassesListContainer>
    )
}

export default AvailableClasses
