import { DeleteIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemById } from "../../api";
import { createCheckin, deleteCheckin } from "../../api/checkins";
import { checkinsCol } from "../../api/config";
import confirmDialog from "../../components/confirmDialog";
import toastAlert from "../../components/toastAlert";
import { SquareCard, Line } from "../../theme";

export const ClassesCard = (
    { contractId, userName, yogaClass, contractLimit, setNewRender }
) => {
    const [checkin, setCheckin] = useState(null);
    const [loading, setLoading] = useState(false);
    const toast = useToast()

    const { id, day, time, date, teacher, name, capacity } = yogaClass

    const checkinId = `${contractId}+${id}`;
    const checkinData = { checkinId, date, userName, time };
    const limits = { id, capacity, contractId, contractLimit }

    useEffect(() => {
        findItemById(checkinsCol, checkinId)
            .then((res) => setCheckin(res))
            .catch(err => console.log(err.message))
    }, [checkinId, contractId, loading]);


    const onDelete = () => {
        setLoading(true);
        deleteCheckin(checkin.id, limits)
            .then(() => {
                toastAlert(toast, "Checkin cancelado", "success")
                setCheckin(null)
            })
            .catch(err => toastAlert(toast, err.message, "error"))
            .finally(() => {
                setLoading(false)
                setNewRender((prevState) => !prevState)
            });
    }

    const onCreate = () => {
        setLoading(true);
        createCheckin(checkinData, limits)
            .then(toastAlert(toast, "Checkin realizado", "success"))
            .catch(err => toastAlert(toast, err.message, "error"))
            .finally(() => {
                setLoading(false)
                setNewRender((prevState) => !prevState)
            });
    }
    const handleCheckin = () => {
        if (capacity === 0) return null

        if (checkin) {
            confirmDialog("Cancelar check-in?", onDelete)
        } else {
            confirmDialog("Fazer check-in?", onCreate)
        }
    };

    return (
        <SquareCard
            color={"brand.500"}
            onClick={handleCheckin}
        >
            {loading ?
                <CircularProgress isIndeterminate color={"brand.200"} alignSelf={"center"} size="75px" />
                :
                <Box
                    display={"flex"}
                    position={"relative"}
                    h={"96px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                        <Text fontSize='lg' as="b" > {day} - {time}</Text>
                    {capacity > 0 ?
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
                            backgroundColor: "rgba(221, 174, 39, 0.8)"                
                            }}
                        w={"136px"}
                        position={"absolute"}
                        right={0}
                        bottom={0}
                    >
                        <Text fontSize='sm'> { checkin ? "Cancelar" : "Agendar"  }</Text>
                        <Box
                            border={"solid 1px black"}
                            boxSize={6}
                            borderRadius={"25px"}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            {
                                checkin ?
                                    <DeleteIcon boxSize={"3"} />
                                    :
                                    <ChevronRightIcon boxSize={"6"} />
                            }
                        </Box>
                    </Box>
                </Box>
            }
        </SquareCard>
    );
};


