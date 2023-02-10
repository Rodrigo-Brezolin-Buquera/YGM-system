import { Text, CircularProgress, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { colors } from "../../theme/colors";

const ClassesCard = (props) => {
    const { contractId, yogaClassId, checkins, day, time, teacher, name, capacity, loading, setLoading } = props;
    const checkinId = `${contractId}+${yogaClassId}`;
    const checkinDone = checkins?.length && checkins.find((checkin) => checkin.id === checkinId);
    // eslint-disable-next-line autofix/no-unused-vars
    // eslint-disable-next-line no-unused-vars
    const [checkin, setCheckin] = useState(checkinDone);

    const handleCheckin = async () => {
        if (checkin && capacity === 0) {
            if (window.confirm("Cancelar este checkin?")) {
                setLoading(true);
                // await deleteCheckin(checkinId, setCheckin);
                setLoading(false);
            }
        } else if (!checkin && capacity > 0) {
            if (window.confirm("Agendar o checkin neste horário?")) {
                setLoading(true);
                // await createCheckin(contractId, yogaClassId, setCheckin);
                setLoading(false);

            }
        } else if (!checkin && capacity === 0) {
            alert("Não há mais vagas nesse horário");
        }
    };

    useEffect(() => {

    }, [handleCheckin, checkins, checkin]);

    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"1em"}
            borderRadius={"10px"}
            padding={"0.5em"}
            width={"180px"}
            minH={"60px"}
            _hover={{ cursor: "pointer" }}
            backgroundColor={ checkin ? colors.secondary : colors.lightNeutral }
            onClick={handleCheckin}
        >
            {loading ? <CircularProgress isIndeterminate color={colors.secondary} size="75px" /> :
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
                            <Text>  {name}  </Text>
                            <Text> {teacher}   </Text>
                        </>
                        :
                        <Text  > Não há mais vagas </Text>
                    }
                </Box>
            }
        </Box>
    );
};

export default ClassesCard;
