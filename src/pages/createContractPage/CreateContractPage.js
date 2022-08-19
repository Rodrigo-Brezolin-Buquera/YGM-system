import React, { useState } from 'react'
import Header from '../../components/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, LoginForm, BoxContainer, Select } from "./styled"
import useForm from '../../hooks/useForm'
import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { TypeOptions } from '../../constants/selectOptions';
import { createContract } from '../../services/requests/contractRequests';
import { goToAdmin } from '../../routes/coordinator';

const CreateContractPage = () => {
    useProtectedPageAdmin()
    const [form, onChange, cleanFields] = useForm({ name: "", email: "", plan: "", date: "" })
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const onSubmitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        createContract(form, setLoading, goToAdmin, history)
        cleanFields()
        
    }
 

    return (
        <>
            <Header history={history} />
            <MainContainer>
                <BoxContainer>
                    <LoginForm onSubmit={onSubmitForm} >
                        <TextField
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            type="text"
                            required
                            placeholder="Nome completo"
                            fullWidth
                            margin="normal"
                            label="Name"
                            ariant="filled"
                            color="primary"
                        ></TextField>

                        <TextField
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            type="email"
                            required
                            placeholder="Email"
                            fullWidth
                            margin="normal"
                            label="Email"
                            color="primary"
                        />
                        <Select
                            name="plan"
                            onChange={onChange}
                            placeholder="Escolha um plano"
                            value={form.plan}
                            required
                        >
                            <TypeOptions />

                        </Select>
                        <TextField
                            name="date"
                            onChange={onChange}
                            value={form.date}
                            type="date"
                            required
                            fullWidth
                            margin="normal"
                            color="primary"
                        />
                        <Button
                            type={"submit"}
                            variant={"contained"}
                            color={"secondary"}
                        >
                            {loading ? <CircularProgress color={"inherit"} size={24} />
                                :
                                <Typography>Criar contratro</Typography>}
                        </Button>
                    </LoginForm>
                </BoxContainer>
            </MainContainer>
        </>
    )
}

export default CreateContractPage
