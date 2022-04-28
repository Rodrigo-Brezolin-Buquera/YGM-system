import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { MainContainer, ButtonContainer } from "./styled"
import Button from '@material-ui/core/Button';
import UserInfo from '../../compononents/userInfo/UserInfo'
import EditPlanForm from '../../compononents/editPlanForm/EditPlanForm';
import EditInfoForm from '../../compononents/editInfoForm/EditInfoForm';
import { goBack } from '../../routes/coordinator';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { GlobalStateContext } from '../../global/GlobalStateContext'



const EditContractPage = () => {
    useProtectedPageAdmin()
    const [plan, setPlan] = useState(false)
    const [info, setInfo] = useState(false)
    const history = useHistory()
    const params = useParams();
    const { setters, states } = useContext(GlobalStateContext);

    useEffect(() => {
        // getUserById(params.userId, setters.setCurrentUser)
    }, [states.newRender])

    const handlePlan = () => {
        if (window.confirm("Você deseja alterar a situação deste plano?")) {
            
        }
    }

    const editInfo = () => {
        setPlan(false)
        setInfo(!info)
    }

    const editPlan = () => {
        setInfo(false)
        setPlan(!plan)
    }

    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"variant"}
                    onClick={() => goBack(history)}
                >Voltar
                </Button>

                {

                    states.currentUser && states.currentUser.plans && states.currentUser.plans.length &&
                    <UserInfo
                        id={states.currentUser.id}
                        name={states.currentUser.name}
                        type={states.currentUser.plans[0].type}
                        frequency={states.currentUser.plans[0].frequency}
                        planStarted={states.currentUser.plans[0].planStarted}
                        planEnds={states.currentUser.plans[0].planEnds}
                        totalClasses={states.currentUser.plans[0].totalClasses}
                        avaliableClasses={states.currentUser.plans[0].avaliableClasses}

                    />}

                <ButtonContainer>
                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"secondary"}
                        onClick={() => handlePlan()}
                    >
                        {states.currentUser && states.currentUser.plans.length && states.currentUser.plans[0].status ? "Pausar Plano" : "Reativar plano"}
                    </Button>

                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"secondary"}
                        onClick={() => editPlan()}
                    >
                        Alterar plano
                    </Button>

                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"secondary"}
                        onClick={() => editInfo()}
                    >
                        Editar informações
                    </Button>
                </ButtonContainer>

                {plan && <EditPlanForm setPlan={setPlan} />}
                {info && <EditInfoForm setInfo={setInfo} />}
            </MainContainer>
        </div>
    )
}

export default EditContractPage
