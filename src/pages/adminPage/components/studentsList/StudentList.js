import React from 'react'
import { List, FilterContainer } from './styled';
import { Input, Select } from '@chakra-ui/react'
import UserInfoList from '../userInfoList/UserInfoList';
import { StatusOptions, TypeOptions } from '../../../../constants/selectOptions';
import useInput from "../../../../hooks/useInput"

const StudentList = ({ contracts }) => {
    const [nameFilter, handleNameFilter] = useInput("")
    const [status, handleStatus] = useInput("")
    const [planType, handlePlanType] = useInput("")

    const userList = contracts.length && contracts
        .filter(user => user.name?.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter(user => {
            const contract = user.currentContract
            switch (status) {
                case "":
                    return contract.active === true || contract.active === false
                case "ativos":
                    return contract.active === true
                case "inativos":
                    return contract.active === false
            }
        })
        .filter((user) => {
            const contract = user.currentContract
            switch (planType) {
                case "":
                    return contract.plan
                case "1x-Mensal":
                    return contract.plan === "1x-Mensal"
                case "2x-Mensal":
                    return contract.plan === "2x-Mensal"
                case "1x-Trimestral":
                    return contract.plan === "1x-Trimestral"
                case "2x-Trimestral":
                    return contract.plan === "2x-Trimestral"
                case "1x-Semestral":
                    return contract.plan === "1x-Semestral"
                case "2x-Semestral":
                    return contract.plan === "2x-Semestral"
                case "Avulsa":
                    return contract.plan === "---Avulsa"
                case "Gympass":
                    return contract.plan === "---Gympass"
                default:
                    return contract.plan
            }
        })
        .map((user) => {
            const contract = user.currentContract
            return (
                <UserInfoList
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    plan={contract.plan}
                    started={contract.started}
                    ends={contract.ends}
                    availableClasses={contract.availableClasses}
                    active={contract.active}
                />
            )
        })

    return (
        <List>
            <FilterContainer>
                <Input
                    onChange={handleNameFilter}
                    fullWidth
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
            </FilterContainer>
            
            {userList.length ? userList : <p> Nenhum resultado encontrado, selecione as opções </p>}
           
           
        </List>
    )
}

export default StudentList
