import React from 'react'
import flower from "../../assets/logo/flower.png"
import { FlowerLogo, ErrorContainer, TextContainer } from './styled'
import Typography from '@material-ui/core/Typography';
import { goBack } from '../../routes/coordinator'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
    const history = useHistory()
    
    return (
        <div>
            <ErrorContainer>
                <FlowerLogo src={flower} alt="logo flor" />
                <TextContainer>
                    <Typography variant="h5"> Erro 404: Página não encontrada </Typography>
                    <Typography > Verifique a URL ou clique em voltar </Typography>

                    <Button
                        type={"submit"}
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => goBack(history)}
                    >Voltar
                    </Button>
                </TextContainer>

            </ErrorContainer>
        </div>
    )
}

export default ErrorPage
