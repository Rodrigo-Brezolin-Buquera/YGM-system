import { Card, Heading, Text, Input } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { createContractlessCheckin } from "../api/checkins"
import { stringPattern } from "../api/patterns"
import { useInput } from "../hooks/useInput"
import { LoadingButton, MainContainer } from "../theme"
import { simplifyDate } from "../utils/dates"

export const Booking = ({ selected, setSelected, setLoading }) => {
    const [name, handleName] = useInput("")
    const { pathname } = useLocation();

    const addStudent = async () => {
        const { date, time, capacity, id } = selected
        setLoading(true)
        await createContractlessCheckin({ name, date, time }, { capacity, yogaClassId: id })
            .then(setSelected && setSelected(null))               
            .catch(err => console.log(err.message))
        setLoading(false)
    }
    
    return (
        <MainContainer>
            <Heading size={"lg"}> Agendamento </Heading>

            {
                selected ?
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
                            pathname === "/admin/calendar" ?
                                <Text minW={"110px"}
                                    fontWeight={"bold"}
                                >
                                    {simplifyDate(selected?.date)} - {selected?.time}
                                </Text>
                                :
                                null
                        }
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
