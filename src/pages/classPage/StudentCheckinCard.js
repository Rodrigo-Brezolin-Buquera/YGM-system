import { DeleteIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box, Card, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { validateCheckin, cancelCheckin, cancelContractlessCheckin } from "../../api/checkins";
import { confirmDialog, toastAlert } from "../../theme";

const StudentCheckinCard = ({ id, name, verified, capacity, setLoading, contractless, }) => {
    const [cardLoading, setCardLoading] = useState(false);
    const toast = useToast()

    const onConfirm = () => {
        setCardLoading(true);
        validateCheckin(id, !verified)
        .catch(err => toastAlert(toast, err.message, "error"))
            .finally(() => {
                setCardLoading(false)
                setLoading((prevState => !prevState));
            });
    }

    const onDelete = () => {
        confirmDialog("Cancelar este checkin?", () => {
            setCardLoading(true);
            (contractless ? cancelContractlessCheckin(id, capacity) : cancelCheckin(id, capacity))
            .catch(err => toastAlert(toast, err.message, "error"))
                .finally(() => {
                    setCardLoading(false)
                    setLoading((prevState => !prevState))                
                });
        })
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
                <CircularProgress isIndeterminate color="brand.200" size="50px" />
                :
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    _hover={{ cursor: "pointer" }}
                    p={"0 0.5em"}
                    w={"100%"}
                >

                    <Text onClick={onConfirm} fontSize={"mds"} >  {name}  </Text>

                    <DeleteIcon     
                        _hover={{ cursor: "pointer" }}
                        onClick={onDelete}
                        boxSize={"5"}
                    />
                </Box>
            }
        </Card>
    );
};

export default StudentCheckinCard;
