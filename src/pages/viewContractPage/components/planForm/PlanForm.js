import React from 'react'
import { Form, Input, Select } from './styled'
import useForm from '../../../../hooks/useForm'
import { Button, CircularProgress, Typography } from '@material-ui/core'
import { TypeOptions } from '../../../../constants/selectOptions'
import { addNewContract } from '../../../../services/requests/contractRequests'

const PlanForm = ({ setAddPlan, id, setLoading, loading }) => {
    const [form, onChange, cleanFields] = useForm({ plan: "", date: "" })
   

    const onSubmitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        await addNewContract(form, id)
        cleanFields()
        setLoading(false)
        setAddPlan(false)
    }

    return (
        <Form onSubmit={onSubmitForm} >
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
               {loading ? <CircularProgress color={"inherit"} size={24} />
            :
            <> <Typography>Alterar contratro</Typography> </> } 
            </Button>
        </Form>
    )
}

export default PlanForm
