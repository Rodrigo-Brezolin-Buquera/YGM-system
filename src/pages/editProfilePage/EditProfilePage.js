import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Header from '../../compononents/headerUser/HeaderUser'
import EditInfoForm from '../../compononents/editInfoForm/EditInfoForm';
import { useHistory } from "react-router-dom";
import { MainContainer } from "./styled"
import PassWordForm from '../../compononents/passWordForm/PassWordForm'
import { goBack } from '../../routes/coordinator'
import { useProtectedPageStudent } from '../../hooks/useProtectedPageStudent';
import { sendValidationCode } from '../../services/users';


const EditProfilePage = () => {
    useProtectedPageStudent()
    const [passwordForm, setPasswordForm] = useState(false)
    const history = useHistory()
 
    const handlePasswordForm = () => {
        if(window.confirm("Você deseja altera sua senha? Um código de validação será enviado para seu email")){
            sendValidationCode()
            setPasswordForm(!passwordForm)
        }

        // esta fazer a requisição no voltar também
     
    }

    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"variant"}
                    onClick={() => goBack(history)}
                >Voltar
                </Button>

                <EditInfoForm />

                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"variant"}
                    onClick={() => handlePasswordForm()}
                >
                    {passwordForm ? "Voltar" : "Alterar senha"}    
                </Button>

                {passwordForm && <PassWordForm setPasswordForm={setPasswordForm} />}
            </MainContainer>
        </div>
    )
}

export default EditProfilePage
