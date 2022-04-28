import React, { useEffect, useContext } from 'react'
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { MainContainer, SideContainer } from './styled';
import StudentList from '../../compononents/studentsList/StudentList';
import AvailableClasses from "../../compononents/availableClasses/AvailableClasses"
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';


const AdminPage = () => {
    useProtectedPageAdmin()
    const { setters, states } = useContext(GlobalStateContext);
    const history = useHistory()
    setters.setAdmin(true)

    useEffect(() => {
        // getUsers(setters.setUsers)
        // findAllClasses(setters.setClasses)
    }, [states.newRender])

    return (
        <div>
            <Header history={history} />
            <MainContainer>
                <StudentList />
                <SideContainer>
                    <AvailableClasses />
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default AdminPage
