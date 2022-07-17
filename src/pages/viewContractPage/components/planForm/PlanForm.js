import React from 'react'
import { Form, Input, Select } from './styled'
import useForm from '../../../../hooks/useForm'
import { Button, Typography } from '@material-ui/core'
import { TypeOptions } from '../../../../constants/selectOptions'
import { addNewContract } from '../../../../services/requests/contractRequests'

const PlanForm = ({ setAddPlan, id }) => {
    const [form, onChange, cleanFields] = useForm({ plan: "", date: "" })

    const onSubmitForm = (e) => {
        e.preventDefault()
        addNewContract(form, id)
        setAddPlan(false)
        cleanFields()
    }

    return (
        <Form onSubmit={onSubmitForm} >

            <Typography>Plano:</Typography>
            <Select
                name="plan"
                onChange={onChange}
                placeholder="Escolha um plano"
                value={form.plan}
                required
            >
                <TypeOptions />
            </Select>

            <Typography>Início:</Typography>
            <Input
                name="date"
                onChange={onChange}
                placeholder="Escolha um plano"
                value={form.date}
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
        </Form>
    )
}

export default PlanForm
