import React from 'react'
import { InfoContainer, LineContainer, ColumnContainer } from './styled'
import { Text } from '@chakra-ui/react'
import { goToViewContract } from '../../../../routes/coordinator';
import { useHistory } from "react-router-dom";

const UserInfoList = (props) => {
    const history = useHistory()

    return (
        <InfoContainer
            status={props.status}
            onClick={() => goToViewContract(history, props.id)}
        >

            <ColumnContainer>
                <LineContainer>
                    <Text fontSize='xl'  >Nome:</Text>
                    <Text >{props.name}</Text>
                </LineContainer>

                <LineContainer>
                    <Text fontSize='xl' >Plano: </Text>
                    <Text >{props.plan}</Text>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>
                <LineContainer>
                    <Text fontSize='xl' >Início do plano: </Text>
                    <Text >{props.started}</Text>
                </LineContainer>

                <LineContainer>
                    <Text fontSize='xl'  >Fim previsto: </Text>
                    <Text > {props.ends}</Text>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>

                <LineContainer>
                    <Text fontSize='xl' >Aulas disponíveis:</Text>
                    <Text >{props.availableClasses}</Text>
                </LineContainer>
            </ColumnContainer>

        </InfoContainer>
    )
}

export default UserInfoList
