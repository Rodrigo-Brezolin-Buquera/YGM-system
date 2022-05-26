import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from '../../components/headerAdmin/HeaderAdmin'
import { MainContainer, ColumnContainer, ButtonContainer, SideContainer } from "./styled"
import ClosedPlansInfo from '../../components/closedPlansInfo/ClosedPlansInfo';
import CheckinsDone from '../../components/checkinsDone/CheckinsDone';
import UserInfo from '../../components/userInfo/UserInfo'
import Button from '@material-ui/core/Button';
import { goToEditContract } from '../../routes/coordinator';
import PlanForm from '../../components/planForm/PlanForm';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';


const ViewContractPage = () => {
    useProtectedPageAdmin()
    const params = useParams();
    
    const history = useHistory()
   
    const [addPlan, setAddPlan] = useState(false)
   

    const addNewPlan = () => {
        setAddPlan(!addPlan)
    }

    useEffect(() => {
        
    }, [addPlan])

    return (
        <div>
            <Header history={history} />

            <MainContainer>
                <SideContainer>
                    {/* {user.id && <CheckinsDone user={user} />} */}
                </SideContainer>
                <ColumnContainer>
                    {/* {
                        user && user.plans
                        &&
                        <UserInfo
                            id={user.id}
                            name={user.name}
                            type={user.plans[0].type}
                            frequency={user.plans[0].frequency}
                            planStarted={user.plans[0].planStarted}
                            planEnds={user.plans[0].planEnds}
                            totalClasses={user.plans[0].totalClasses}
                            avaliableClasses={user.plans[0].avaliableClasses}
                        />
                    } */}

                    <ButtonContainer>
                        <Button
                            type={"submit"}
                            variant={"contained"}
                            color={"variant"}
                            onClick={() => goToEditContract(history, "user.id")}
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

                    {addPlan && <PlanForm setAddPlan={setAddPlan} />}

                </ColumnContainer>

                 <ClosedPlansInfo />

            </MainContainer>

        </div>
    )
}

export default ViewContractPage
