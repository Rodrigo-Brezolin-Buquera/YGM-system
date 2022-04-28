import React,{useContext} from 'react'
import { LoginForm, Select } from './styled'
import useForm from '../../hooks/useForm'
import { Button, Typography, TextField } from '@material-ui/core'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { FrequencyOptions, TypeOptions } from '../../constants/selectOptions'
import moment from 'moment'

const EditPlanForm = (props) => {
    const { setters, states } = useContext(GlobalStateContext);
    const [form, onChange, cleanFields] = useForm({
        type: states.currentUser.plans[0].type,
        frequency: states.currentUser.plans[0].frequency,
        planStarted: moment(states.currentUser.plans[0].planStarted).format("YYYY-MM-DD"),
        planEnds: moment(states.currentUser.plans[0].planEnds).format("YYYY-MM-DD"),
        totalClasses: states.currentUser.plans[0].totalClasses,
        avaliableClasses: states.currentUser.plans[0].avaliableClasses
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        
        props.setPlan(false)
        setters.setNewRender(!states.newRender)
        cleanFields()
    }

    return (
        <LoginForm onSubmit={onSubmitForm} >

            <Typography> Plano: </Typography>
            <Select
                name="type"
                onChange={onChange}
                placeholder="Escolha um plano"
                value={form.type}
                required
            >
              <TypeOptions/>
            </Select>

            <Select
                name="frequency"
                onChange={onChange}
                placeholder="Escolha a frequência "
                value={form.frequency}
                required
            >
               <FrequencyOptions/>
            </Select>

            <Typography> Início: </Typography>
            <TextField
                name="planStarted"
                onChange={onChange}
                value={form.planStarted}
                type="date"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                variant="filled"
            />
            <Typography> Fim previsto: </Typography>
            <TextField
                name="planEnds"
                onChange={onChange}
                value={form.planEnds}
                type="date"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                variant="filled"
            />

            <TextField
                name="totalClasses"
                onChange={onChange}
                value={form.totalClasses}
                type="number"
                required
                fullWidth
                margin="normal"
                id="filled-basic"
                label="Aulas totais"
                variant="filled"
            />

            <TextField
                name="avaliableClasses"
                onChange={onChange}
                value={form.avaliableClasses}
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
        </LoginForm>
    )
}

export default EditPlanForm
