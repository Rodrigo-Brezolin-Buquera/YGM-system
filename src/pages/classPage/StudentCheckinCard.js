import { CheckIcon, DeleteIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box } from "@chakra-ui/react";
import  { useEffect } from "react";

const StudentCheckinCard = ({ id, name, verified, loading, setLoading }) => {
    useEffect(() => { }, [verified, loading]);

    const confirmCheckin = async () => {
        setLoading(true);
        // await validateCheckin(id, !verified);
        setLoading(false);
    };

    const cancelCheckin = async () => {
        if (window.confirm("Cancelar este checkin?")) {
            setLoading(true);
            // await deleteCheckin(id);
            setLoading(false);
        }
    };

    return (
        <Box
            display={"flex"}
            justifyItems={"center"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
            borderRadius={"8px"}
            margin={"0.5em"}
            padding={"0.2em"}
            h={"60px"}
            width={["75%", "90%", "90%"]}
            _hover={{ cursor: "pointer" }}

        >
            {(loading) ?
                <CircularProgress isIndeterminate color="yellow.400" size="50px" />
                :
                <Box
                    display={"flex"}
                    justifyItems={"center"}
                    alignItems={"center"}
                    _hover={{ cursor: "pointer" }}
                >
                    <Box
                        _hover={{ cursor: "pointer" }}
                        onClick={() => confirmCheckin()}
                        color={verified ? "green.500" : "red.500"}
                    >
                        {verified ? <CheckIcon /> : <QuestionOutlineIcon />}
                    </Box>

                    <Text >  {name}  </Text>

                    <Box
                        _hover={{ cursor: "pointer" }}
                        onClick={() => cancelCheckin()}  >
                        <DeleteIcon />
                    </Box>
                </Box>
            }
        </Box>
    );
};

export default StudentCheckinCard;
