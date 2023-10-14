import { CircularProgress } from "@chakra-ui/react";
import { useRequestData } from "../../../hooks/useRequestData";
import UserCard from "./UserCard";

const UserList = ({ router }) => {
    const { data, loading } = useRequestData("/auth/inactive")

    const list = data?.length
        ?
        data.map((user) => {
            return (
                <UserCard
                    key={user.id}
                    user={user}
                    router={router}
                />
            );
        })
        :
        <p> Nenhum usuário encontrado </p>

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />
    }

    return (
        <>
            {list}
        </>
    );
};

export default UserList;
