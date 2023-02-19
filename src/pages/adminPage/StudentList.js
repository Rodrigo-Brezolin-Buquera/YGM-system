import { Box, Input, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findAllItems } from "../../api";
import { contractsCol } from "../../api/config";
import { StatusOptions, TypeOptions } from "../../components/selectOptions";
import {useInput} from "../../hooks/useInput";
import UserInfo from "./UserInfo";


const StudentList = ({  navigate }) => {
    const [contracts, setContracts] = useState([]);
    const [nameFilter, handleNameFilter] = useInput("");
    const [status, handleStatus] = useInput("");
    const [planType, handlePlanType] = useInput("");


    useEffect(() => {
        findAllItems(contractsCol)
            .then(res => setContracts(res))
            .catch(err => console.log(err.message))

    }, [ ]);

    const userList = contracts?.length && contracts
        .filter(user => user.name?.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter(user => {
            const contract = user?.currentContract;
            switch (status) {
            case "ativos":
                return contract?.active === true;
            case "inativos":
                return contract?.active === false;
            default:
                return contract?.active === true || contract?.active === false;

            }
        })
        .filter((user) => {
            const contract = user?.currentContract;
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
        .map((user) => {
            const contract = user?.currentContract;
            return (
                <UserInfo
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    plan={contract.plan}
                    started={contract.started}
                    ends={contract.ends}
                    availableClasses={contract.availableClasses}
                    active={contract.active}
                    navigate={navigate}
                />
            );
        });

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

                <Select
                    placeholder='Status'
                    onChange={handleStatus}
                >
                    <StatusOptions />
                </Select>
            </Box>

            {userList?.length ? userList : <p> Nenhum contrato encontrado </p>}


        </Box>
    );
};

export default StudentList;
