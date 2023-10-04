import { Box, CircularProgress, Input, Select } from "@chakra-ui/react";
import { InputContainer } from "../../../theme";
import ContractCard from "./ContractCard";
import { useContractListLogic } from "./useContractListLogic";
import { planOptions } from "../../../components/planOptions";

const ContractList = ({router }) => {
    const { contractList, loading, handleName, handlePlan } = useContractListLogic()

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


    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    return (
        <InputContainer>
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
        </InputContainer>
    );
};

export default ContractList;
