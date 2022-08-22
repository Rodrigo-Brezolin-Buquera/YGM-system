import React from 'react'
import { FormLine, PlanForm, Select } from './styled'
import useForm from '../../../../hooks/useForm'
import { Button, Typography, TextField, CircularProgress } from '@material-ui/core'
import { TypeOptions } from '../../../../constants/selectOptions'
import moment from 'moment'
import { editContract } from '../../../../services/requests/contractRequests'
import { useParams } from 'react-router-dom'

const EditPlanForm = ({ contract, setPlan, name, setLoading, loading }) => {
    const { userId } = useParams();
    const [form, onChange, cleanFields] = useForm({
        name: name,
        plan: contract.plan,
        started: moment(contract.started, "DD/MM/YYYY").format("YYYY-MM-DD"),
        ends: moment(contract.ends, "DD/MM/YYYY").format("YYYY-MM-DD"),
        availableClasses: contract.availableClasses,
        active: contract.active
    })

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (window.confirm("Você deseja alterar este plano?")) {
            setLoading(true)
            editContract(form, userId, setLoading, setPlan)
        }
        cleanFields()
    }

    return (
        <PlanForm onSubmit={onSubmitForm} >

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

            <FormLine>
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
            </FormLine>
            <FormLine>
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
            </FormLine>
            <FormLine>
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
            </FormLine>
            <FormLine>
                <Typography> Fim: </Typography>
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
            </FormLine>

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
                {loading ? <CircularProgress color={"inherit"} size={24} />
                    :
                    <> <Typography>Alterar contratro</Typography> </>}
            </Button>
        </PlanForm>
    )
}

export default EditPlanForm
