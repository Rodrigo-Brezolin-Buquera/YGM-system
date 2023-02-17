import { Text, CircularProgress, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findItemById } from "../../api";
import { createCheckin, deleteCheckin } from "../../api/checkins";
import { checkinsCol } from "../../api/config";
import SquareCard from "../../theme/SquareCard";

export const ClassesCard = (
    { contractId, userName, yogaClass, contractLimit  }
) => {
    const [checkin, setCheckin] = useState(null);
    const [loading, setLoading] = useState(false);
    const {id, day, time, date, teacher, name, capacity} = yogaClass

    const checkinId = `${contractId}+${id}`;
    const checkinData = { checkinId, date, userName, time };
    const limits = { id, capacity, contractId, contractLimit }

    useEffect(() => {
        findItemById(checkinsCol, checkinId)
            .then((res) => setCheckin(res))
            .catch(err => console.log(err.message))

    }, [checkinId, contractId]);

   
    const handleCheckin = () => {
        if (checkin) {
            if (window.confirm("Cancelar este checkin?")) {
                setLoading(true);
                deleteCheckin(checkin.id, limits)
                    .then(setCheckin(null))
                    .catch((err) => { console.log(err.message) })
                    .finally(() => setLoading(false));

            }
        } else if (!checkin && capacity > 0) {
            if (window.confirm("Agendar o checkin neste horário?")) {
                setLoading(true);
                createCheckin(checkinData, limits)
                    .then(setCheckin(!checkin))
                    .catch((err) => { console.log(err.message) })
                    .finally(() => setLoading(false));
            }
        } else if (!checkin && capacity === 0) {
            alert("Não há mais vagas nesse horário");
        }
    };

  

    return (
        <SquareCard
            color={checkin ? "brand.200" : "brand.500"}
            onClick={handleCheckin}
        >
            {loading ? <CircularProgress isIndeterminate color={"brand.200"} size="75px" /> :
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


