import React, { useLayoutEffect } from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, SideContainer } from './styled';
import StudentList from './components/studentsList/StudentList';
import AvailableClasses from "../../components/availableClasses/AvailableClasses"
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { useRequestData } from '../../hooks/useRequestData';


const AdminPage = () => {
    // useProtectedPageAdmin()
    const history = useHistory()
    const [contracts, getContracts] = useRequestData([], "/contracts/list")
    const [yogaClasses, getyogaClasses] = useRequestData([], "/calendar?today=true")

    useLayoutEffect(() => {
        getContracts()
        getyogaClasses()
    }, [])

    return (
        <div>
            <Header history={history} />
            <MainContainer>
                <StudentList contracts={contracts} />
                <SideContainer>
                    <AvailableClasses yogaClasses={yogaClasses} />
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default AdminPage
