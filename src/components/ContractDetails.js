import {  Heading, Text } from "@chakra-ui/react";
import { memo } from "react";
import { Line, TextContainer } from "../theme";

const ContractDetails = ({contract}) => {
    return (
        < TextContainer
            alignItems={"center"}
        >
            <Heading size={"md"}>Informações do plano</Heading>
            <Line>
                <Text as='b' fontSize='lg' >Nome:</Text>
                <Text fontSize='lg' >{contract?.name}</Text>
            </Line>

            <Line>
                <Text as='b' fontSize='lg' >Plano: </Text>
                <Text fontSize='lg' >{contract?.plan} </Text>
            </Line>
              
            <Line>
                <Text as='b' fontSize='lg' >Início: </Text>
                <Text fontSize='lg' > {contract?.planStarted}</Text>
            </Line>

            {
                contract?.planEnds ?  
                    <Line>
                        <Text as='b' fontSize='lg' >Fim previsto: </Text>
                        <Text fontSize='lg' > {contract?.planEnds}</Text>
                    </Line>
                    : 
                    null
            }

            {
                isNaN(contract?.availableClasses) ?  
                    <Line>
                        <Text as='b' fontSize='lg' >Aulas disponíveis:</Text>
                        <Text fontSize='lg' >{contract?.availableClasses}</Text>
                    </Line> 
                    : 
                    null
            }
           
        </TextContainer>
    );
};

export default memo(ContractDetails);