import {Button, CircularProgress} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import CheckinsDone from "../../components/checkinsDone/CheckinsDone";
import ClosedPlansInfo from "../../components/closedPlansInfo/ClosedPlansInfo";
import Header from "../../components/headerAdmin/HeaderAdmin";
import UserInfo from "../../components/userInfo/UserInfo";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import { goToEditContract } from "../../routes/coordinator";
import PlanForm from "./components/planForm/PlanForm";
import { MainContainer, ColumnContainer, ButtonContainer, SideContainer } from "./styled";

const ViewContractPage = () => {
    useProtectedPageAdmin();
    const { userId } = useParams();
    const [contracts, getContracts] = useRequestData({}, `/contracts/${userId}`);
    const [checkins, getCheckins] = useRequestData([], `/booking/contract/${userId}` );
    const [addPlan, setAddPlan] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const addNewPlan = () => {
        setAddPlan(!addPlan);
    };

    useEffect(() => {
        getContracts();
        getCheckins();
    }, [addPlan, loading]);
   
    return (
        <>
            <Header history={history} />

            <MainContainer>
                <SideContainer>
                    <CheckinsDone checkins={checkins}/>
                </SideContainer>
                <ColumnContainer>
                    {
                        contracts.id ?
                            <UserInfo
                                id={contracts.id}
                                name={contracts.name}
                                plan={contracts.currentContract.plan}
                                planStarted={contracts.currentContract.started}
                                planEnds={contracts.currentContract.ends}
                                availableClasses={contracts.currentContract.availableClasses}
                            /> :
                            <CircularProgress isIndeterminate color="yellow.400" size="70px" />  
                    }

                    <ButtonContainer>
                        <Button
                            colorScheme={"yellow"}
                            onClick={() => goToEditContract(history, contracts.id)}
                        >
                            Editar Contrato
                        </Button>

                        <Button
                            colorScheme={"yellow"}
                            onClick={() => addNewPlan()}
                        >
                            {addPlan ? "Fechar" : "Novo Plano"}
                        </Button>
                    </ButtonContainer>

                    {addPlan && <PlanForm 
                        setAddPlan={setAddPlan} 
                        id={contracts.id} 
                        setLoading={setLoading}
                        loading={loading}
                    />}

                </ColumnContainer>

                <ClosedPlansInfo closedContracts={contracts.closedContracts} />

            </MainContainer>

        </>
    );
};

export default ViewContractPage;
