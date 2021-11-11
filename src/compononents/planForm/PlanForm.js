import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { LoginForm, Input, Select } from './styled'
import useForm from '../../hooks/useForm'
import { Button, Typography } from '@material-ui/core'
import { changePlanStatus, createPlan } from '../../services/plans'
import { FrequencyOptions, TypeOptions } from '../../constants/selectOptions'

const PlanForm = ({ setAddPlan }) => {
    const [form, onChange, cleanFields] = useForm({ type: "", frequency: "", planStarted: "" })
    const { setters, states } = useContext(GlobalStateContext);

    const userId = states.currentUser.id
    const planId = states.currentUser.plans[0].id

    const onSubmitForm = (e) => {
        e.preventDefault()
        setAddPlan(false)
        changePlanStatus(planId)
        createPlan(form, userId, setters.setNewRender, states.newRender)
    }

    return (
        <LoginForm onSubmit={onSubmitForm} >
            
            <Typography>Plano:</Typography>
            <Select
                name="type"
                onChange={onChange}
                placeholder="Escolha um plano"
                value={form.type}
                required
            >
                <TypeOptions />
            </Select>

            <Select
                name="frequency"
                onChange={onChange}
                placeholder="Escolha a frequência "
                value={form.frequency}
                required
            >
                <FrequencyOptions />
            </Select>

            <Typography>Início:</Typography>
            <Input
                name="planStarted"
                onChange={onChange}
                placeholder="Escolha um plano"
                value={form.planStarted}
                type="date"
                required
            />

            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                Adicionar plano
            </Button>
        </LoginForm>
    )
}

export default PlanForm
