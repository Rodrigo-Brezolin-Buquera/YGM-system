import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { ClassesListContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import ClassesCard from '../classesCard/ClassesCard';

const AvailableClasses = () => {
    const { setters, states } = useContext(GlobalStateContext);

    const today = moment().format("DD/MM/YYYY")

    const classesList = states.classes && states.classes
        .filter((yogaClass) => {           
            return moment(yogaClass.date).format("DD/MM/YYYY") === today
        })
        .map((yogaClass) => {
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
            {classesList.length ? classesList : <p> Não há aulas disponíveis </p> }
        </ClassesListContainer>
    )
}

export default AvailableClasses
