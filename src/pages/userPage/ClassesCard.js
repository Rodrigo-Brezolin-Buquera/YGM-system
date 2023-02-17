import { Text, CircularProgress, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { createCheckin, deleteCheckin } from "../../api/checkins";
import SquareCard from "../../theme/SquareCard";

const ClassesCard = (
    { contractId, yogaClassId, checkins, day, userName, time, date, teacher, name, capacity, contractLimit, loading, setLoading }
) => {

    const [checkin, setCheckin] = useState(null);
    const checkinId = `${contractId}+${yogaClassId}`;
    const checkinData = { checkinId, date, userName, time };
    const limits = { yogaClassId, capacity, contractId, contractLimit }

    const handleCheckin = () => {
        if (checkin) {
            if (window.confirm("Cancelar este checkin?")) {
                setLoading(true);
                deleteCheckin(checkinId, limits)
                    .then(setCheckin(!checkin))
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

    useEffect(() => {
        const checkinDone = checkins?.length && checkins.find((checkin) => checkin.id === checkinId);
        setCheckin(checkinDone);

    }, [checkins, checkin, checkinId]);

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

export default ClassesCard;
