import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { findItemWhere, findAllItems } from "../../api";
import { contractsCol, yogaClassesCol } from "../../api/config";
import HeaderAdmin from "../../components/HeaderAdmin";
// import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { getToday } from "../../services/moment";
import { SideContainer  } from "../../theme/SideContainer"
import { colors } from "../../theme/colors";
import AvailableClasses from "./AvailableClasses";
import StudentList from "./StudentList";

const AdminPage = () => {
    // useProtectedPageAdmin();
    const navigate = useNavigate();
    const [contracts, setContracts] = useState([], "/contracts/list");
    const [yogaClasses, setyogaClasses] = useState([], "/calendar?today=true");


    useEffect(() => {
        findAllItems(contractsCol)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))
        setContracts()
        findItemWhere(yogaClassesCol, "date", getToday())
            .then(res => setyogaClasses(res))
            .catch(err => console.log(err.message))
    }, []);

    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Box
                display={"flex"}
                w={"100%"}
                h={"100%"}
                minH={"100vh"}
                backgroundColor={colors.lightNeutral}
                flexDirection={["column-reverse", "row", "row"]}
                justifyContent={["flex-end", "start", "start"]}
            >
                <StudentList contracts={contracts} navigate={navigate}/>
                <SideContainer>
                    <AvailableClasses yogaClasses={yogaClasses} navigate={navigate} />
                </SideContainer>
            </Box>

        </>
    );
};

export default AdminPage;
