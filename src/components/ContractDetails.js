import { Heading, Text } from "@chakra-ui/react";
import { Line, TextContainer } from "../theme";
import { DoubleClickText } from "./DoubleClickText";

export const ContractDetails = ({ contract, admin }) => {

    const OptionalDetails = ({ children }) => {
        if (contract?.availableClasses === null) {
            return null
        }

        return (
            <>
                <Line>
                    <Text as='b' fontSize='lg' >Fim previsto: </Text>
                    <Text fontSize='lg' > {contract?.ends}</Text>
                </Line>
                <Line>
                    <Text as='b' fontSize='lg' >Aulas disponíveis:</Text>
                    {children}
                </Line>
            </>
        )
    }

    return (
        <TextContainer alignItems={"center"}>
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
                <Text fontSize='lg' > {contract?.started}</Text>
            </Line>

            <OptionalDetails>
                {
                    admin ?
                        <DoubleClickText
                            text={contract?.availableClasses}
                            atribute={"availableClasses"}
                            path={`/contracts/changeClasses/${contract?.id}`}
                            size={4}
                        />
                        :
                        <Text fontSize='lg' >
                            {contract?.availableClasses}
                        </Text>
                }
            </OptionalDetails>
        </TextContainer>
    );
};

