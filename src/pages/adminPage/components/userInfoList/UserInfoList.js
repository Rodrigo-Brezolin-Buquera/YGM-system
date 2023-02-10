import { Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { goToViewContract } from "../../../../routes/coordinator";
import { InfoContainer, LineContainer, ColumnContainer } from "./styled";

const UserInfoList = (props) => {
    const history = useHistory();

    return (
        <InfoContainer
            status={props.status}
            onClick={() => goToViewContract(history, props.id)}
        >

            <ColumnContainer>
                <LineContainer>
                    <Text as="b"  >Nome:</Text>
                    <Text >{props.name}</Text>
                </LineContainer>

                <LineContainer>
                    <Text as="b" >Plano: </Text>
                    <Text >{props.plan}</Text>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>
                <LineContainer>
                    <Text as="b" >Início do plano: </Text>
                    <Text >{props.started}</Text>
                </LineContainer>

                <LineContainer>
                    <Text as="b"  >Fim previsto: </Text>
                    <Text > {props.ends}</Text>
                </LineContainer>
            </ColumnContainer>

            <ColumnContainer>

                <LineContainer>
                    <Text as="b" >Aulas disponíveis:</Text>
                    <Text >{props.availableClasses}</Text>
                </LineContainer>
            </ColumnContainer>

        </InfoContainer>
    );
};

export default UserInfoList;
