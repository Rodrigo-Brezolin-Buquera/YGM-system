import React from 'react'
import Header from '../../compononents/headerAdmin/HeaderAdmin'
import { useHistory } from "react-router-dom";
import { MainContainer, LoginForm, BoxContainer, Select } from "./styled"
import useForm from '../../hooks/useForm'
import { Button, Typography, TextField } from '@material-ui/core';
import { createUser } from '../../services/users';
import { useProtectedPageAdmin } from '../../hooks/useProtectedPageAdmin';
import { FrequencyOptions, TypeOptions } from '../../constants/selectOptions';



const CreateUserPage = () => {
    useProtectedPageAdmin()
    const [form, onChange, cleanFields] = useForm({ name: "", email: "", type: "", frequency: "", planStarted: "" })
    const history = useHistory()


    const onSubmitForm = (e) => {
        e.preventDefault()
        createUser(form)
        cleanFields()
    }

    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <BoxContainer>
                    <Typography variant="h5"> Informações pessoais:</Typography>
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

                        <Typography variant="h5"> Informações do plano:</Typography>

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

                        <TextField
                            name="planStarted"
                            onChange={onChange}
                            placeholder="Escolha um plano"
                            value={form.planStarted}
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
                            Criar Usuário
                        </Button>

                    </LoginForm>
                </BoxContainer>
            </MainContainer>
        </div>
    )
}

export default CreateUserPage
