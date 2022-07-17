import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from '../../components/headerAdmin/HeaderAdmin'
import { MainContainer, ColumnContainer, ButtonContainer, SideContainer } from "./styled"
import ClosedPlansInfo from '../../components/closedPlansInfo/ClosedPlansInfo';
import CheckinsDone from '../../components/checkinsDone/CheckinsDone';
import UserInfo from '../../components/userInfo/UserInfo'
import Button from '@material-ui/core/Button';
import { goToEditContract } from '../../routes/coordinator';
import PlanForm from './components/planForm/PlanForm';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { useRequestData } from '../../hooks/useRequestData';


const ViewContractPage = () => {
    // useProtectedPageAdmin()
    const { userId } = useParams();
    const [contracts, getContracts] = useRequestData({}, `/contracts/${userId}`)
    const [addPlan, setAddPlan] = useState(false)
    const history = useHistory()

    const addNewPlan = () => {
        setAddPlan(!addPlan)
    }

    useEffect(() => {
        getContracts()
    }, [addPlan])
    console.log(contracts)
    return (
        <div>
            <Header history={history} />

            <MainContainer>
                <SideContainer>
                    { contracts.id && <CheckinsDone checkins={contracts.currentContract.checkins}/>}
                </SideContainer>
                <ColumnContainer>
                    {
                        contracts.id &&
                        <UserInfo
                            id={contracts.id}
                            name={contracts.name}
                            plan={contracts.currentContract.plan}
                            planStarted={contracts.currentContract.started}
                            planEnds={contracts.currentContract.ends}
                            avaliableClasses={contracts.currentContract.avaliableClasses}
                        />
                    }

                    <ButtonContainer>
                        <Button
                            type={"submit"}
                            variant={"contained"}
                            color={"variant"}
                            onClick={() => goToEditContract(history, contracts.id)}
                        >
                            Editar Usuário
                        </Button>

                        <Button
                            type={"submit"}
                            variant={"contained"}
                            color={"secondary"}
                            onClick={() => addNewPlan()}
                        >
                            {addPlan ? "Fechar" : "Novo Plano"}
                        </Button>
                    </ButtonContainer>

                    {addPlan && <PlanForm setAddPlan={setAddPlan} id={contracts.id} />}

                </ColumnContainer>

                <ClosedPlansInfo closedContracts={contracts.closedContracts} />

            </MainContainer>

        </div>
    )
}

export default ViewContractPage
