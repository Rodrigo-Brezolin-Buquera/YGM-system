import React from 'react'
import { LoginForm } from './styled'
import useForm from '../../hooks/useForm'
import { Button, TextField, Typography } from '@material-ui/core'

import { DayOptions, StyleOptions, TeacherOptions } from '../../constants/selectOptions'


const CreateClassForm = () => {
   
    const [form, onChange, cleanFields] = useForm({
        name: "",
        day: "",
        time: "",
        teacher: "",
        startingDate: ""
    })


    const onSubmitForm = (e) => {
        e.preventDefault()

        cleanFields()
    }
   
    return (
        <LoginForm onSubmit={onSubmitForm} >
            <Typography variant="h6" > Criar aulas:</Typography>

            <select
                name="name"
                onChange={onChange}
                placeholder="Escolha um estilo"
                value={form.name}
                required
            >
                <StyleOptions/>
            </select>

            <select
                name="day"
                onChange={onChange}
                placeholder="Escolha um dia de aula"
                value={form.day}
                required
            >
                <DayOptions/>
            </select>

            <Typography > Horário:</Typography>
            <TextField
                name="time"
                onChange={onChange}
                value={form.time}
                type="time"
                required
                fullWidth
            />

            <select
                name="teacher"
                onChange={onChange}
                placeholder="Escolha um professor"
                value={form.teacher}
                required
            >
                <TeacherOptions/>
            </select>

            <Typography > Dia de início:</Typography>
            <TextField
                name="startingDate"
                onChange={onChange}
                placeholder="Data de início"
                value={form.startingDate}
                type="date"
                required
                fullWidth
            />

            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                Criar
            </Button>
        </LoginForm>
    )
}

export default CreateClassForm
