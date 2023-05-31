import { Box, Input, Select, Card, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { findAllItems } from "../../api";
import { usersCol } from "../../api/config";
import { StatusOptions } from "../../components/selectOptions";
import { useInput } from "../../hooks/useInput";
import { InputContainer, Line } from "../../theme";
import { goToContract } from "../../routes/coordinator";

const UserList = ({ navigate }) => {
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
                <Card
                    key={user.id}
                    display={"flex"}
                    flexDirection={["column", "column", "column", "row"]}
                    padding={"0.5em"}
                    borderRadius={"10px"}
                    minW={"250px"}
                    width={"100%"}
                    backgroundColor={"brand.500"}
                    _hover={{ cursor: "pointer" }}
                    overflow={"auto"}
                    onClick={() => goToContract(navigate, user.id)}
                >
                    <Line justifyContent={["center", "center", "center", "flex-start"]} >
                        <Text as="b">Nome:</Text>
                        <Text >{user.name}</Text>
                        <br/>                      
                        <Text as="b" >Status: </Text>
                        <Text >{user.active ? "Ativo": "Inativo"}</Text>
                    </Line>         
                </Card>
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
