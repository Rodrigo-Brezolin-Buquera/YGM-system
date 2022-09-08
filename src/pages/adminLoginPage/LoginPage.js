import React from 'react'
import { MainContainer, Logo } from "./styled"
import { useHistory } from "react-router-dom"
import defaultLogo from "../../assets/logo/defaultLogo.png"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { LoginForm } from "./components/LoginForm"
import {Text} from "@chakra-ui/react";

const AdminLoginPage = () => {
    const history = useHistory()
    useUnprotectedPage()

    return (
        <MainContainer>
            <Logo src={defaultLogo} alt="logo" />
            <Text>Admin</Text>
            <LoginForm history={history} />
        </MainContainer>
    )
}

export default AdminLoginPage
