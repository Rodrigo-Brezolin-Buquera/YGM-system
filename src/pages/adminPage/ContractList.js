import { Box, Input, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findAllItems } from "../../api";
import { contractsCol } from "../../api/config";
import { TypeOptions } from "../../components/selectOptions";
import { useInput } from "../../hooks/useInput";
import { InputContainer } from "../../theme";
import UserInfo from "./UserInfo";


const ContractList = ({ navigate }) => {
    const [contracts, setContracts] = useState([]);
    const [nameFilter, handleNameFilter] = useInput("");
    const [planType, handlePlanType] = useInput("");


    useEffect(() => {
        findAllItems(contractsCol)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))

    }, []);

    const userList = contracts?.length && contracts
        .filter(user => user.name?.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter((contract) => {
            switch (planType) {
                case "1x-Mensal":
                    return contract?.plan === "1x-Mensal";
                case "2x-Mensal":
                    return contract?.plan === "2x-Mensal";
                case "1x-Trimestral":
                    return contract?.plan === "1x-Trimestral";
                case "2x-Trimestral":
                    return contract?.plan === "2x-Trimestral";
                case "1x-Semestral":
                    return contract?.plan === "1x-Semestral";
                case "2x-Semestral":
                    return contract?.plan === "2x-Semestral";
                case "Avulsa":
                    return contract?.plan === "---Avulsa";
                case "Gympass":
                    return contract?.plan === "---Gympass";
                default:
                    return contract?.plan;
            }
        })
        .map((contract) => {
            
            return (
                <UserInfo
                    key={contract.id}
                    id={contract.id}
                    name={contract.name}
                    plan={contract.plan}
                    started={contract.started}
                    ends={contract.ends}
                    availableClasses={contract.availableClasses}
                    navigate={navigate}
                />
            );
        });

    return (
        <InputContainer>
            <Box
                display={"flex"}
                gap={"1em"}
                width={"100%"}
                flexDirection={["column", "row", "row"]}
            >
                <Input
                    onChange={handleNameFilter}
                    placeholder="Buscar por nome "
                    variant="outline"
                />

                <Select
                    placeholder='Plano'
                    onChange={handlePlanType}
                >
                    <TypeOptions />
                </Select>   
            </Box>

            {userList?.length ? userList : <p> Nenhum contrato encontrado </p>}


        </InputContainer>
    );
};

export default ContractList;
