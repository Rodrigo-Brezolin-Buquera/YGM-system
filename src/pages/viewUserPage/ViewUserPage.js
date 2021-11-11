import React, { useState, useEffect, useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useHistory, useParams } from "react-router-dom";
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { MainContainer, ColumnContainer, ButtonContainer, SideContainer } from "./styled"
import ClosedPlansInfo from '../../compononents/closedPlansInfo/ClosedPlansInfo';
import CheckinsDone from '../../compononents/checkinsDone/CheckinsDone';
import UserInfo from '../../compononents/userInfo/UserInfo'
import Button from '@material-ui/core/Button';
import { goToEditUser } from '../../routes/coordinator';
import PlanForm from '../../compononents/planForm/PlanForm';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { getUserById } from '../../services/users';

const ViewUserPage = () => {
    useProtectedPageAdmin()
    const params = useParams();
    const { setters, states } = useContext(GlobalStateContext);
    const history = useHistory()
    setters.setAdmin(true)
    const [addPlan, setAddPlan] = useState(false)
    const user = states.currentUser


    const addNewPlan = () => {
        setAddPlan(!addPlan)
    }

    useEffect(() => {
        getUserById(params.userId, setters.setCurrentUser)
    }, [addPlan, states.newRender])

    return (
        <div>
            <Header history={history} />

            <MainContainer>
                <SideContainer>
                    {user.id && <CheckinsDone user={user} />}
                </SideContainer>
                <ColumnContainer>
                    {
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
                    }

                    <ButtonContainer>
                        <Button
                            type={"submit"}
                            variant={"contained"}
                            color={"variant"}
                            onClick={() => goToEditUser(history, user.id)}
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

                {user.id && <ClosedPlansInfo />}

            </MainContainer>

        </div>
    )
}

export default ViewUserPage
