import { DeleteIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box, Card } from "@chakra-ui/react";
import { useCheckinCardLogic } from "./useCheckinCardLogic";

const StudentCheckinCard = ({ checkin, setReload }) => {
    const { onDelete, loading } = useCheckinCardLogic(checkin, setReload)

    return (
        <Card
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"brand.400"}
            borderRadius={"8px"}
            margin={"0.5em"}
            padding={"0.2em"}
            minH={"50px"}
            w={"75%"}
        >
            {
                loading ?
                    <CircularProgress isIndeterminate color="brand.200" size="50px" />
                    :
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        _hover={{ cursor: "pointer" }}
                        p={"0 0.5em"}
                        w={"100%"}
                        alignItems={"center"}
                    >
                        <Box>
                            <Text fontSize={"md"} fontWeight={"bold"} >  {checkin.name}  </Text>
                            <Text fontSize={"xs"} >  {checkin.plan}  </Text>
                        </Box>
                        <DeleteIcon
                            _hover={{ cursor: "pointer" }}
                            onClick={onDelete}
                            boxSize={"6"}
                        />
                    </Box>
            }
        </Card>
    );
};

export default StudentCheckinCard;
