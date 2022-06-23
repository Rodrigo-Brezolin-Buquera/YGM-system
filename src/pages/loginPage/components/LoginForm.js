import React, { useState } from 'react'
import useForm from '../../../hooks/useForm'
import { Form, BoxContainer } from ".././styled"
import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { login } from '../../../services/firebase/auth';
import { goToAdmin } from '../../../routes/coordinator';



export const LoginForm = (props) => {
  const [loading, setLoading] = useState(false)
  const [form, onChange, cleanFields] = useForm({ email: "", password: "" })

  const onSubmitForm = (e) => {
    e.preventDefault()
    setLoading(true)
    cleanFields()
    login(form)
    setLoading(false)
    goToAdmin(props.history) // mudar isso depois
  }

  return (
    <BoxContainer>
      <Form onSubmit={onSubmitForm} >
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          type="email"
          required
          placeholder="Email"
          fullWidth
          margin="normal"
          id="filled-basic"
          label="Email"
          variant="filled"
        ></TextField>

        <TextField
          name={"password"}
 
          value={form.password}
          onChange={onChange}
          type="password"
          required
          placeholder="Senha"
          fullWidth
          margin="normal"
          id="filled-basic"
          label="Senha"
          variant="filled"
        ></TextField>

        <Button
          type={"submit"}
          variant={"contained"}
          color={"secondary"}
        >
          {loading ?
            <CircularProgress color={"inherit"} size={24} />
            :
            <> <Typography>Login</Typography> </>
          }
        </Button>
      </Form>
    </BoxContainer>
  )
}

