import React from 'react'
import { LoginForm, Input, Select } from './styled'
import useForm from '../../hooks/useForm'
import { Button, Typography } from '@material-ui/core'
import { FrequencyOptions, TypeOptions } from '../../constants/selectOptions'

const PlanForm = ({ setAddPlan }) => {
    const [form, onChange, cleanFields] = useForm({ type: "", frequency: "", planStarted: "" })
   

    const onSubmitForm = (e) => {
        e.preventDefault()
        setAddPlan(false)
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
