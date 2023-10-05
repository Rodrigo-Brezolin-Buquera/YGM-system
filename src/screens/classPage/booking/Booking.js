import { Card, Heading, Text, Input, CircularProgress } from "@chakra-ui/react"
import { LoadingButton, MainContainer } from "../../../theme"
import { useBookingLogic } from "./useBookingLogic"

export const Booking = ({ yogaClass, loading, setLoading }) => {
    const {name, handleName, addStudent, handleKeyPress} = useBookingLogic(yogaClass, setLoading)
   
    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="120px" />
    }

    return (
        <MainContainer>
            <Heading size={"md"}> Agendamento </Heading>
            <Card
                display={"flex"}
                flexDirection={["column", "column", "row", "row"]}
                minWidth={"auto"}
                p={"1em  3em"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"1em"}
                backgroundColor={"brand.500"}
            >
                {
                    yogaClass?.capacity <= 0
                        ?
                        <Text >Não há mais vagas</Text>
                        :
                        <>
                            <Text minW={"80px"}>
                                Vagas: {yogaClass?.capacity}
                            </Text>

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
            </Card>
        </MainContainer>
    )
}
