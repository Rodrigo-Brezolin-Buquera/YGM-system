import { DeleteIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box, Card } from "@chakra-ui/react";
import { useState } from "react";
import { validateCheckin, cancelCheckin, cancelContractlessCheckin } from "../../api/checkins";

const StudentCheckinCard = ({ id, name, verified, capacity, setLoading, contractless }) => {
    const [cardLoading, setCardLoading] = useState(false);

    const confirm = () => {
        setCardLoading(true);
        validateCheckin(id, !verified)
            .catch((err) => { console.log(err.message) })
            .finally(() => {
                setCardLoading(false)
                setLoading((prevState => !prevState));
            });
    }

    const cancel = () => {
        if (window.confirm("Cancelar este checkin?")) {
            setCardLoading(true);
            (contractless ? cancelContractlessCheckin(id, capacity) : cancelCheckin(id, capacity))
                .catch((err) => { console.log(err.message) })
                .finally(() => {
                    setCardLoading(false)
                    setLoading((prevState => !prevState))
                });
        }
    }

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
            w={"75%"}

        >
            {(cardLoading) ?
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

export default StudentCheckinCard;
