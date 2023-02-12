import { CheckIcon, DeleteIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Text, CircularProgress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { deleteCheckin, validateCheckin } from "../../../../services/requests/bookingRequests";
import { StudentCard, IconCont, LineContainer } from "./styled";


const StudentCheckinCard = ({ id, name, verified, loading, setLoading }) => {
    useEffect(() => {
    }, [verified, loading]);

    const confirmCheckin = async () => {
        setLoading(true);
        await validateCheckin(id, !verified);
        setLoading(false);
    };

    const cancelCheckin = async () => {
        if (window.confirm("Cancelar este checkin?")) {
            setLoading(true);
            await deleteCheckin(id);
            setLoading(false);
        } 
    };

    return (
        <StudentCard>
            {(loading) ? 
                <CircularProgress isIndeterminate color="yellow.400" size="50px"  /> 
                : 
                <LineContainer>
                    <IconCont
                        onClick={() => confirmCheckin()}
                        type={verified}
                    >
                        {verified ? <CheckIcon /> : <QuestionOutlineIcon />}
                    </IconCont>

                    <StudentCard key={id} >
                        <Text >  {name}  </Text>
                    </StudentCard>

                    <IconCont onClick={() => cancelCheckin()}  >
                        <DeleteIcon />
                    </IconCont>
                </LineContainer>
            }
        </StudentCard>
    );
};

export default StudentCheckinCard;
