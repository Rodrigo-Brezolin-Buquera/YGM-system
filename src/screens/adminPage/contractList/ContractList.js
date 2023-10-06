import { Box, CircularProgress, Input, Select } from "@chakra-ui/react";
import ContractCard from "./ContractCard";
import { useContractListLogic } from "./useContractListLogic";
import { planOptions } from "../../../components/planOptions";

const ContractList = ({ router }) => {
    const { contractList, loading, handleName, handlePlan } = useContractListLogic()
    
    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    const list = contractList?.length
        ?
        contractList.map((contract) => {
            return (
                <ContractCard
                    key={contract.id}
                    contract={contract}
                    router={router}
                />
            );
        })
        :
        <p> Nenhum contrato encontrado </p>

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"0.5em"}
            width={"100%"}
            margin={"0.5em"}
        >
            <Box
                display={"flex"}
                gap={"1em"}
                width={"100%"}
                flexDirection={["column", "row", "row"]}
            >
                <Input
                    onChange={handleName}
                    placeholder="Buscar por nome "
                    variant="outline"
                />

                <Select
                    placeholder='Plano'
                    onChange={handlePlan}
                >
                    {planOptions()}
                </Select>
            </Box>

            {list}
        </Box>
    );
};

export default ContractList;
