import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext';
import useForm from '../../hooks/useForm'
import { MainContainer, LoginForm, BoxContainer, Logo } from "./styled"
import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import defaultLogo from "../../assets/logo/defaultLogo.png"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import dotenv from "dotenv"
import { login } from '../../services/users';

dotenv.config()


const LoginPage = () => {
    const { setters, states } = useContext(GlobalStateContext);
    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })
    const history = useHistory()
    // useUnprotectedPage()

    const onSubmitForm = (e) => {
        e.preventDefault()
       login(form, history)
  
    }

    return (
        <MainContainer>
            <Logo src={defaultLogo} alt="logo" />
            <BoxContainer>
                <LoginForm onSubmit={onSubmitForm} >
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
                        {states.loading ?
                            <CircularProgress color={"inherit"} size={24} />
                            :
                            <> <Typography>Login</Typography> </>
                        }
                    </Button>
                </LoginForm>
            </BoxContainer>
        </MainContainer>
    )
}

export default LoginPage
