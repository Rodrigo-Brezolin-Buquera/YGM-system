import { Box, CircularProgress, Text } from "@chakra-ui/react";
import ClassesCard from "./ClassesCard";
import { useAvailableClassesLogic } from "./useAvailableClassesLogic";

const AvailableClasses = ({router}) => {
    const {yogaClasses, loading} = useAvailableClassesLogic()

    const classesList = yogaClasses.length
        ?
        yogaClasses.map((yogaClass) => {
            return (
                <ClassesCard
                    key={yogaClass.id}
                    yogaClass={yogaClass}
                    router={router} 
                />
            );
        })
        :
        <p> Não há aulas hoje </p>

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"0.5em"}
            width={"100%"}
        >
            <Text fontSize='xl' > Aulas de hoje:</Text>
            {classesList}
        </Box>
    );
};

export default AvailableClasses;
