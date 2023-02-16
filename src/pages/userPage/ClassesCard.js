import { Text, CircularProgress, Box, Card } from "@chakra-ui/react";
import { useState, useEffect, memo } from "react";
import { createCheckin, deleteCheckin } from "../../api/checkins";

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
        <Card
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"1em"}
            borderRadius={"10px"}
            padding={"0.5em"}
            minW={"180px"}
            w={"70%"}
            minH={"60px"}
            _hover={{ cursor: "pointer" }}
            backgroundColor={checkin ? "brand.200" : "brand.500"}
            onClick={handleCheckin}
        >
            {loading ? <CircularProgress isIndeterminate color={"brand.200"} size="75px" /> :
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={"180px"}
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
        </Card>
    );
};

export default memo(ClassesCard);
