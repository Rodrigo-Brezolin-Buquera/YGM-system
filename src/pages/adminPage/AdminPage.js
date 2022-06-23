import React, { useEffect} from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, SideContainer } from './styled';
import StudentList from '../../components/studentsList/StudentList';
import AvailableClasses from "../../components/availableClasses/AvailableClasses"
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { getAllContracts } from '../../services/requests/contractRequests';


const AdminPage = () => {
    useProtectedPageAdmin()
    
    const history = useHistory()
    

    useEffect(() => {
        getAllContracts()
    }, [])

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
