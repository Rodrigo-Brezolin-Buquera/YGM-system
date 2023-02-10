import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/headerAdmin/HeaderAdmin";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import AvailableClasses from "./components/availableClasses/AvailableClasses";
import StudentList from "./components/studentsList/StudentList";
import { MainContainer, SideContainer } from "./styled";


const AdminPage = () => {
    useProtectedPageAdmin();
    const history = useHistory();
    const [contracts, getContracts] = useRequestData([], "/contracts/list");
    const [yogaClasses, getyogaClasses] = useRequestData([], "/calendar?today=true");

    useLayoutEffect(() => {
        getContracts();
        getyogaClasses();
    }, []);

    return (
        <div>
            <Header history={history} />
            <MainContainer>
                <StudentList contracts={contracts} />
                <SideContainer>
                    <AvailableClasses yogaClasses={yogaClasses} history={history}/>
                </SideContainer>
            </MainContainer>
        </div>
    );
};

export default AdminPage;
