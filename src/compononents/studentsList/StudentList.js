import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { List, Select, FilterContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useInput from '../../hooks/useInput';
import UserInfoList from '../userInfoList/UserInfoList';
import moment from 'moment';
import { StatusOptions, TypeOptions } from '../../constants/selectOptions';

const StudentList = () => {
    const { setters, states } = useContext(GlobalStateContext);
    const [nameFilter, handleNameFilter] = useInput("")
    const [status, handleStatus] = useInput("")
    const [type, handleType] = useInput("")

    const userList = states.users.length && states.users
        .filter(user => user.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter(user => {
            const plan = user.plans[0]
            switch (status) {
                case "":
                    return plan.status === 1 || plan.status === 0
                case "ativos":
                    return plan.status === 1
                case "inativos":
                    return plan.status === 0
            }
        })
        .filter((user) => {
            const plan = user.plans[0]
            switch (type) {
                case "":
                    return plan.type
                case "Mensal":
                    return plan.type === "Mensal"
                case "Trimestral":
                    return plan.type === "Trimestral"
                case "Semestral":
                    return plan.type === "Semestral"
                default:
                    break;
            }
        })
        .map((user) => {
            const plan = user.plans[0]
            return (
                <UserInfoList
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    type={plan.type}
                    frequency={plan.frequency}
                    planStarted={moment(plan.planStarted).format("DD/MM")}
                    planEnds={moment(plan.planEnds).format("DD/MM")}
                    totalClasses={plan.totalClasses}
                    avaliableClasses={plan.avaliableClasses}
                    status={plan.status}
                />
            )
        })

    return (
        <List>
            <FilterContainer>
                <TextField
                    onChange={handleNameFilter}
                    fullWidth
                    margin="normal"
                    placeholder="Buscar por nome "
                    variant="outlined"
                    placeholder="Name"
                    margin="normal"
                    label="Name"
                />

                <Select
                    onChange={handleType}
                >
                    <TypeOptions />
                </Select>

                <Select
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
