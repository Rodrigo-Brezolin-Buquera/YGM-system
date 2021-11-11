import React, { useContext } from 'react'
import { LoginForm, FormContainer } from './styled'
import useForm from '../../hooks/useForm'
import { Button, TextField, Typography } from '@material-ui/core'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { editUser, editUserById, sendNewPassword } from '../../services/users'

const EditInfoForm = (props) => {
    const { setters, states } = useContext(GlobalStateContext);
    const user = states.currentUser
    const [form, onChange, cleanFields] = useForm({
        name: user.name,
        email: user.email,
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        states.admin ? editUserById(user.id, form) : editUser(form)
        cleanFields()
        setters.setNewRender(!states.newRender)
        props.setInfo(false)
    }
    return (
        <FormContainer>
            <LoginForm onSubmit={onSubmitForm} >

                <Typography variant="h5">Informações pessoais</Typography>

                <TextField
                    name="name"
                    onChange={onChange}
                    value={form.name}
                    type="text"
                    required
                    placeholder="Nome"
                    fullWidth
                    margin="normal"
                    id="filled-basic"
                    label="Nome"
                    variant="filled"
                />

                <TextField
                    name="email"
                    onChange={onChange}
                    value={form.email}
                    type="text"
                    required
                    placeholder="Emaail"
                    fullWidth
                    margin="normal"
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                />

                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"secondary"}
                >
                    Atualizar
                </Button>


            </LoginForm>

            {states.admin &&
                <Button
                    onClick={()=> sendNewPassword(user.id) }
                    type={"submit"}
                    variant={"contained"}
                    color={"variant"}
                >
                    Gerar nova senha
                </Button>
            }

        </FormContainer>
    )
}

export default EditInfoForm
