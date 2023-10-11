import { CircularProgress, Heading, Text } from "@chakra-ui/react";
import { WrapContainer } from "../../../theme";
import { ClassesCard } from "./ClassesCard";
import { useAvailableClassesLogic } from "./useAvailableClassesLogic";

const AvailableClasses = ({ contractId, name, plan }) => {
    const { yogaClasses, loading } = useAvailableClassesLogic(contractId)

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    const classesList = yogaClasses?.length && yogaClasses.map((yogaClass) => {
        const contract = { contractId, name, plan }
        return (
            <ClassesCard
                key={yogaClass.id}
                contract={contract}
                yogaClass={yogaClass}
            />
        );
    });

    return (
        <>
            <Heading fontSize='xl' fontWeight={"bold"} > Faça seu check-in</Heading>
            <WrapContainer  >
                {
                    classesList.length
                        ? classesList
                        :
                        <Text fontSize='lg' > Não há aulas disponíveis </Text>
                }
            </WrapContainer>
        </>
    );
};

export default AvailableClasses;
