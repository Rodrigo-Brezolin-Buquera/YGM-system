import { Box, Input, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findAllItems } from "../../api";
import { usersCol } from "../../api/config";
import { StatusOptions } from "../../components/selectOptions";
import { useInput } from "../../hooks/useInput";
import { InputContainer } from "../../theme";
import UserInfo from "./UserInfo";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [nameFilter, handleNameFilter] = useInput("");
    const [status, handleStatus] = useInput("");

    useEffect(() => {
        findAllItems(usersCol)
            .then(res => setUsers(res))
            .catch(err => console.log(err.message))
    }, []);

    const userList = users?.length && users
        .filter(user => user.name?.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter(user => {
            switch (status) {
                case "Ativos":
                    return user.active === true;
                case "Inativos":
                    return user.active === false;
                default:
                    return user.active === true || user.active === false;
            }
        })
        .map((user) => {
            return (
                <UserInfo
                    key={user.id}
                    user={user}
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
                    placeholder='Status'
                    onChange={handleStatus}
                >
                    <StatusOptions />
                </Select>
            </Box>
            {userList?.length ? userList : <p> Nenhum usuário encontrado </p>}
        </InputContainer>
    );
};

export default UserList;
