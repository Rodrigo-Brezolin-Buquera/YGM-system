import React from 'react'
import { LoginForm, Input } from './styled'
import useForm from '../../hooks/useForm'
import {Button, Typography, TextField} from '@material-ui/core'


const PassWordForm = (props) => {
  
    const [form, onChange, cleanFields] = useForm({
        password: "",
        validationCode: "",
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
       
        props.setPasswordForm(false)
        cleanFields()
    }

    return (
        <LoginForm onSubmit={onSubmitForm} >

            <Typography variant="h5">Alteração de senha</Typography>

            <TextField
                name="validationCode"
                onChange={onChange}
                value={form.validationCode}
                type="password"
                required
                placeholder="Código"
                fullWidth
                margin="normal"
                id="filled-basic"
                label="Código"
                variant="filled"
            />
            
            <TextField
                name="password"
                onChange={onChange}
                value={form.password}
                type="password"
                required
                placeholder="Nova senha"
                fullWidth
                margin="normal"
                id="filled-basic"
                label="Nova senha"
                variant="filled"
            />
            
            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                Salvar 
            </Button>
        </LoginForm>
    )
}

export default PassWordForm
