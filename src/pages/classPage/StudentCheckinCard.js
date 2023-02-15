import {  DeleteIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box, Card } from "@chakra-ui/react";
import { useEffect, memo } from "react";
import { validateCheckin, cancelCheckin } from "../../api/checkins";

const StudentCheckinCard = ({ id, name, verified, capacity, loading, setLoading }) => {
    useEffect(() => { }, [verified, loading]);

    const confirm = () => {
        setLoading(true);
        validateCheckin(id, !verified)
            .then()
            .catch((err) => { console.log(err.message) })
            .finally(() => setLoading(false));
    };

    const cancel = async () => {
        if (window.confirm("Cancelar este checkin?")) {
            setLoading(true);
            cancelCheckin(id, capacity)
                .then()
                .catch((err) => { console.log(err.message) })
                .finally(() => setLoading(false));
        }
    };

    return (
        <Card
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={verified ? "brand.200" : "brand.400"}
            borderRadius={"8px"}
            margin={"0.5em"}
            padding={"0.2em"}
            minH={"50px"}
            width={["75%", "90%", "90%"]}

        >
            {(loading) ?
                <CircularProgress isIndeterminate color="yellow.400" size="50px" />
                :
                <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    _hover={{ cursor: "pointer" }}
                    w={"100%"}
                >

                    <Text onClick={confirm} fontSize={"mds"} >  {name}  </Text>

                    <DeleteIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={cancel}
                        boxSize={"5"}
                    />
                </Box>
            }
        </Card>
    );
};

export default memo(StudentCheckinCard);
