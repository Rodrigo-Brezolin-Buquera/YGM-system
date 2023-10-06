import { DeleteIcon } from "@chakra-ui/icons";
import { Text, CircularProgress, Box, Card } from "@chakra-ui/react";
import { useCheckinCardLogic } from "./useCheckinCardLogic";

const StudentCheckinCard = ({ checkin, setLoading }) => {
    const {onDelete, cardLoading} = useCheckinCardLogic(checkin, setLoading)
   

    // não está funcionando legal as renderizações!!!







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
                cardLoading ?
                    <CircularProgress isIndeterminate color="brand.200" size="50px" />
                    :
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        _hover={{ cursor: "pointer" }}
                        p={"0 0.5em"}
                        w={"100%"}
                    >
                        <Text fontSize={"mds"} >  {checkin.name}  </Text>
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
