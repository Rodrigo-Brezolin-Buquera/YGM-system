import React from 'react'
import { PlanForm, Select } from './styled'
import useForm from '../../../../hooks/useForm'
import { Button, Typography, TextField } from '@material-ui/core'
import { TypeOptions } from '../../../../constants/selectOptions'
import moment from 'moment'
import { editContract } from '../../../../services/requests/contractRequests'
import { useParams } from 'react-router-dom'

const EditPlanForm = ({ contract, setPlan, name }) => {
    const { userId } = useParams();
    const [form, onChange, cleanFields] = useForm({
        name: name,
        plan: contract.plan,
        started: moment(contract.started, "DD/MM/YYYY").format("YYYY-MM-DD"),
        ends: moment(contract.ends, "DD/MM/YYYY").format("YYYY-MM-DD"),
        availableClasses: contract.availableClasses,
        active: contract.active
    })
 
    const onSubmitForm = (e) => {
        e.preventDefault()
        if (window.confirm("Você deseja alterar este plano?")) {
            editContract(form, userId)
        }
        cleanFields()
        setPlan(false) 
    }

    return (
        <PlanForm onSubmit={onSubmitForm} >
            <Typography> Nome: </Typography>
            <TextField
                name="name"
                onChange={onChange}
                value={form.name}
                type="text"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                variant="filled"
            />
            <Typography> Plano: </Typography>
            <Select
                name="plan"
                onChange={onChange}
                placeholder="Escolha um plano"
                value={form.plan}
                required
            >
                <TypeOptions />
            </Select>
            <Typography> Status: </Typography>
            <Select
                name="active"
                onChange={onChange}
                placeholder="Status do plano"
                value={form.active}
                required
            >
                <option value="" > Status </option>
                <option value={true} > Ativo </option>
                <option value={false} > Inativo </option>
            </Select>
            <Typography> Início: </Typography>
            <TextField
                name="started"
                onChange={onChange}
                value={form.started}
                type="date"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                variant="filled"
            />
            <Typography> Fim previsto: </Typography>
            <TextField
                name="ends"
                onChange={onChange}
                value={form.ends}
                type="date"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                variant="filled"
            />
            <TextField
                name="availableClasses"
                onChange={onChange}
                value={form.availableClasses}
                type="number"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                label="Aulas disponíveis: "
                variant="filled"
            />
            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                Alterar plano
            </Button>
        </PlanForm>
    )
}

export default EditPlanForm
