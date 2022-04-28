import React, { useEffect} from 'react'
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, SideContainer } from './styled';
import StudentList from '../../compononents/studentsList/StudentList';
import AvailableClasses from "../../compononents/availableClasses/AvailableClasses"
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';


const AdminPage = () => {
    useProtectedPageAdmin()
    
    const history = useHistory()
    

    useEffect(() => {
        
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
