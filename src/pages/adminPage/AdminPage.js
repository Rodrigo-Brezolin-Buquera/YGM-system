import React, { useEffect, useState } from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, SideContainer } from './styled';
import StudentList from './components/studentsList/StudentList';
import AvailableClasses from "../../components/availableClasses/AvailableClasses"
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { getAllContracts } from '../../services/requests/contractRequests';


const AdminPage = () => {
    // useProtectedPageAdmin()
    const history = useHistory()
    const [contracts, setContracts] = useState([])


    useEffect(() => {
        getAllContracts(setContracts)
    }, [])

    // console.log("adminpage", contracts)
    return (
        <div>
            <Header history={history} />
            <MainContainer>
                <StudentList contracts={contracts} />
                <SideContainer>
                    <AvailableClasses />
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default AdminPage
