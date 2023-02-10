import { Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/headerAdmin/HeaderAdmin";
import UserInfo from "../../components/userInfo/UserInfo";
import { useProtectedPageAdmin } from "../../hooks/useProtectedPageAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import { goBack } from "../../routes/coordinator";
import { ChangePasswordButton } from "./components/changePasswordButton/ChangePasswordButton";
import { DeleteContractButton } from "./components/deleteContractButton/DeleteContractButton";
import EditPlanForm from "./components/editPlanForm/EditPlanForm";
import { MainContainer, ButtonContainer } from "./styled";

const EditContractPage = () => {
    useProtectedPageAdmin();
    const { userId } = useParams();
    const [contracts, getContracts] = useRequestData({}, `/contracts/${userId}`);
    const [plan, setPlan] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getContracts();
    }, [setPlan, plan, loading]);

    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <Button
                    colorScheme={"yellow"}
                    onClick={() => goBack(history)}
                >Voltar
                </Button>

                {
                    contracts.id &&
                    <UserInfo
                        id={contracts.id}
                        name={contracts.name}
                        plan={contracts.currentContract.plan}
                        planStarted={contracts.currentContract.started}
                        planEnds={contracts.currentContract.ends}
                        availableClasses={contracts.currentContract.availableClasses}
                    />
                }

                <ButtonContainer>
                    <Button
                        colorScheme='yellow'
                        onClick={() => setPlan(!plan)}
                    >
                        <Text> { plan ? "Fechar" : "Alterar contrato"}</Text> 
                    </Button>

                    <ChangePasswordButton
                        id={contracts.id}                  
                    />
                    <DeleteContractButton
                        id={contracts.id}
                        history={history}
                    />
                </ButtonContainer>

                {plan && 
                <EditPlanForm 
                    setPlan={setPlan} 
                    contract={contracts.currentContract} 
                    name={contracts.name} 
                    setLoading={setLoading}
                />}

            </MainContainer>
        </div>
    );
};

export default EditContractPage;
