import React, { useContext } from 'react'
import { LoginForm, Input } from './styled'
import useForm from '../../hooks/useForm'
import { Button, TextField, Typography } from '@material-ui/core'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { deleteClass } from '../../services/classes'

const DeleteClassForm = () => {
    const { setters, states } = useContext(GlobalStateContext);
    const [form, onChange, cleanFields] = useForm({
        classGroupId: "",
        date: ""

    })

    const classesGroup = [];
    states.classes && states.classes.forEach((item) => {
        classesGroup.push(item.groupId);
    });

    const groupIdList = classesGroup.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });

    const finalList = []
    groupIdList.forEach((id) => {
        const foundClass = states.classes.find(yogaClass => yogaClass.groupId === id)
        finalList.push(foundClass)
    })

    const selectList = finalList.map((yogaClass) => {
        return <option value={yogaClass.groupId} > {yogaClass.name} {yogaClass.day} {yogaClass.time}  </option>
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        deleteClass(form, setters.setClasses)
        cleanFields()       
    }

    return (
        <LoginForm onSubmit={onSubmitForm} >
            <Typography variant="h6" > Excluir aulas:</Typography>

            <select
                name="classGroupId"
                onChange={onChange}
                placeholder="Escolha um aula"
                value={form.classGroupId}
                required
            >
                <option value="" >  Escolha um aula </option>
                {selectList}
            </select>
            <Typography > A partir de:</Typography>
            <TextField
                name="date"
                onChange={onChange}
                placeholder="data exclusão"
                value={form.date}
                type="date"
                required
            />

            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                Excluir
            </Button>
        </LoginForm>
    )
}

export default DeleteClassForm
