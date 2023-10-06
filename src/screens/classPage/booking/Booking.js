import { Heading, Text, Input } from "@chakra-ui/react"
import { LoadingButton,  WrapContainer } from "../../../theme"
import { useBookingLogic } from "./useBookingLogic"

export const Booking = ({ yogaClass, setReload }) => {
    const {name, handleName, addStudent, handleKeyPress} = useBookingLogic(yogaClass, setReload)
   
   
    return (
        <>
             
                <WrapContainer>
                {
                    yogaClass?.capacity <= 0
                    ?
                    <Text >Não há mais vagas</Text>
                    :
                    <>
                        <Heading size={"md"} alignSelf={"center"} > Agendamento: </Heading>
                            <Input
                                maxW={"300px"}
                                placeholder={"Nome"}
                                onChange={handleName}
                                onKeyPress={handleKeyPress}
                                value={name}
                                />
                            <LoadingButton color={"brand.200"} handler={addStudent} >
                                <Text>Adicionar</Text>
                            </LoadingButton>
                        </>
                }
                </WrapContainer>
        </>
    )
}
