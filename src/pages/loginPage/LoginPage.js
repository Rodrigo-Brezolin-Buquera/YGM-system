import React from 'react'
import { MainContainer, Logo } from "./styled"
import { useHistory } from "react-router-dom"
import defaultLogo from "../../assets/logo/defaultLogo.png"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { LoginForm } from "./components/LoginForm"

const LoginPage = () => {
    const history = useHistory()
    useUnprotectedPage()

    return (
        <MainContainer>
            <Logo src={defaultLogo} alt="logo" />
            <LoginForm history={history} />
        </MainContainer>
    )
}

export default LoginPage
