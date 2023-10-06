import { DeleteIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box } from "@chakra-ui/react";
import { SquareCard, Line } from "../../../theme";
import { useCheckinLogic } from "./useCheckinLogic";

export const ClassesCard = ({ contractId, name, yogaClass }) => {
    const { id: classId, time, date, day, teacher, capacity } = yogaClass
    const checkinData = { capacity, classId, contractId, name, time, date }
    const { handleCheckin, loading, checkinExists } = useCheckinLogic(checkinData)

    if (loading) {
        return (
            <SquareCard color={"brand.500"}>
                <CircularProgress isIndeterminate color={"brand.200"} alignSelf={"center"} size="75px" />
            </SquareCard>
        )
    }

    return (
        <SquareCard
            color={"brand.500"}
            onClick={handleCheckin}
        >
            <Box
                display={"flex"}
                position={"relative"}
                h={"96px"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <Text fontSize='lg' as="b" > {day} - {time}</Text>

                {
                    capacity > 0
                        ?
                        <Line>
                            <Text fontSize='md'>  {name}   </Text>
                            <Text fontSize='md'>- Prof. {teacher}   </Text>
                        </Line>
                        :
                        <Text> Não há mais vagas </Text>
                }

                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    borderRadius={"25px"}
                    backgroundColor={"brand.200"}
                    paddingX={"1em"}
                    paddingY={"0.3em"}
                    _hover={{
                        cursor: "pointer",
                        backgroundColor: "brand.600"
                    }}
                    w={"136px"}
                    position={"absolute"}
                    right={0}
                    bottom={0}
                >
                    <Text fontSize='sm' fontWeight={"bold"}> {checkinExists ? "Cancelar" : "Agendar"}</Text>
                    <Box
                        border={"solid 1px black"}
                        boxSize={6}
                        borderRadius={"25px"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        {
                            checkinExists
                                ?
                                <DeleteIcon boxSize={"3"} />
                                :
                                <ChevronRightIcon boxSize={"6"} />
                        }
                    </Box>
                </Box>
            </Box>
        </SquareCard>
    );
};


