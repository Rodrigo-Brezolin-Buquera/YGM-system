import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from '../../components/headerAdmin/HeaderAdmin'
import { MainContainer, ButtonContainer } from "./styled"
import Button from '@material-ui/core/Button';
import UserInfo from '../../components/userInfo/UserInfo'
import EditPlanForm from './components/editPlanForm/EditPlanForm';
import { goBack } from '../../routes/coordinator';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { useRequestData } from '../../hooks/useRequestData';

const EditContractPage = () => {
    useProtectedPageAdmin()
    const { userId } = useParams();
    const [contracts, getContracts] = useRequestData({}, `/contracts/${userId}`)
    const [plan, setPlan] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    useEffect(() => {
        getContracts()
    }, [setPlan, plan, loading])

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
                        type={"submit"}
                        variant={"contained"}
                        color={"secondary"}
                        onClick={() => setPlan(!plan)}
                    >
                        Alterar contrato
                    </Button>
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
    )
}

export default EditContractPage
