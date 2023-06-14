import { Text, CircularProgress, Box, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemById } from "../../api";
import { createCheckin, deleteCheckin } from "../../api/checkins";
import { checkinsCol } from "../../api/config";
import { confirmDialog, toastAlert } from "../../theme";
import SquareCard from "../../theme/SquareCard";


export const ClassesCard = (
    { contractId, userName, yogaClass, contractLimit }
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
            .finally(() => setLoading(false));
    }

    const onCreate = () => {
        setLoading(true);
        createCheckin(checkinData, limits)
            .then(toastAlert(toast, "Checkin realizado", "success"))
            .catch(err => toastAlert(toast, err.message, "error"))
            .finally(() => setLoading(false));
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
            color={checkin ? "brand.200" : "brand.500"}
            onClick={handleCheckin}
        >
            {loading ?
                <CircularProgress isIndeterminate color={"brand.200"} alignSelf={"center"} size="75px" />
                :
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Text fontSize='lg' as="b" > {day} - {time}</Text>
                    {capacity > 0 ?
                        <>
                            <Text>  {name}   </Text>
                            <Text> Prof. {teacher}   </Text>
                        </>
                        :
                        <Text  > Não há mais vagas </Text>
                    }
                </Box>
            }
        </SquareCard>
    );
};


