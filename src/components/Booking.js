import { Card, Heading, Text, Input } from "@chakra-ui/react"
import { createContractlessCheckin } from "../api/checkins"
import { stringPattern } from "../api/patterns"
import { useInput } from "../hooks/useInput"
import { simplifyDate } from "../services/moment"
import { LoadingButton, MainContainer } from "../theme"

export const Booking = ({ selected, loading, setLoading }) => {
    const [name, handleName] = useInput("")

    const addStudent = async () => {
        const { date, time, capacity, id } = selected
        await createContractlessCheckin({ name, date, time }, { capacity, yogaClassId: id })
            .catch(err => console.log(err.message))
            .finally(setLoading(!loading))

    }

    return (
        <MainContainer>
            <Heading size={"lg"}> Agendamento </Heading>

            {
                selected ?
                    <Card
                        display={"flex"}
                        flexDirection={["column", "row", "row"]}
                        minWidth={"auto"}
                        p={"1em  3em"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"1em"}
                        backgroundColor={"brand.500"}
                    >

                        <Text minW={"110px"}
                            fontWeight={"bold"}
                        >
                            {simplifyDate(selected?.date)} - {selected?.time}
                        </Text>


                        {
                            selected?.capacity <= 0
                                ?
                                <Text >Não há mais vagas</Text>
                                :
                                <>
                                    <Text minW={"80px"}>
                                        Vagas: {selected?.capacity}
                                    </Text>

                                    <Input
                                        maxW={"300px"}
                                        placeholder={"Nome "}
                                        onChange={handleName}
                                        pattern={stringPattern
                                        }
                                    />
                                    <LoadingButton color={"brand.200"} handler={addStudent} >
                                        <Text>Adicionar</Text>
                                    </LoadingButton>
                                </>
                        }
                    </Card>
                    :
                    <Text fontWeight={"black"}>Selecione uma aula</Text>
            }
        </MainContainer>
    )
}