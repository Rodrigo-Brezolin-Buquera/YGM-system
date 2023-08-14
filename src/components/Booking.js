import { Card, Heading, Text, Input, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { createContractlessCheckin } from "../api/checkins"
import { useInput } from "../hooks/useInput"
import toastAlert from "./toastAlert"
import { LoadingButton, MainContainer } from "../theme"
import { simplifyDate } from "../utils/dates"
import { capitalizeFirstLetter } from "../utils/names"

export const Booking = ({ selected, setSelected, setLoading }) => {
    const [name, handleName, reset] = useInput("")
    const { pathname } = useRouter();
    const toast = useToast()

    const addStudent = async () => {
        const { date, time, capacity, id } = selected
        setLoading(true)
        await createContractlessCheckin(
            { name: capitalizeFirstLetter(name), date, time },
            { capacity, yogaClassId: id }
        ).then(() => {
            setSelected && setSelected(null)
            reset()
        }).catch(err => toastAlert(toast, err.message, "error"))
        setLoading(false)

    }

    const handleKeyPress = async (e) => {
        if (e.key === "Enter") {
            await addStudent()
        }
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
                    :
                    <Text fontWeight={"black"}>Selecione uma aula</Text>
            }
        </MainContainer>
    )
}
