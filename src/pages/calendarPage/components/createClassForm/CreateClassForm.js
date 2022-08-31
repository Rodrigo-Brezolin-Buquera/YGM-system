import React from 'react'
import { FormLine, Form } from './styled'
import useForm from '../../../../hooks/useForm'
import { Button, CircularProgress, TextField, Typography } from '@material-ui/core'
import { DayOptions, StyleOptions, TeacherOptions } from '../../../../constants/selectOptions'
import { createClass } from '../../../../services/requests/calendarRequests'

const CreateClassForm = ({ loading, setLoading }) => {

    const [form, onChange, cleanFields] = useForm({
        name: "",
        day: "",
        time: "",
        teacher: "",
        date: ""
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        createClass(form, setLoading)
        cleanFields()
    }

    return (
        <Form onSubmit={onSubmitForm} >
            <FormLine>
                <select
                    name="name"
                    onChange={onChange}
                    placeholder="Escolha um estilo"
                    value={form.name}
                    required
                >
                    <StyleOptions />
                </select>
                <select
                    name="day"
                    onChange={onChange}
                    placeholder="Escolha um dia de aula"
                    value={form.day}
                    required
                >
                    <DayOptions />
                </select>
                <select
                    name="teacher"
                    onChange={onChange}
                    placeholder="Escolha um professor"
                    value={form.teacher}
                    required
                >
                    <TeacherOptions />
                </select>
            </FormLine>
            <TextField
                name="time"
                onChange={onChange}
                value={form.time}
                type="time"
                required
                fullWidth
            />
            <TextField
                name="date"
                onChange={onChange}
                placeholder="Data de início"
                value={form.date}
                type="date"
                required
                fullWidth
            />
            <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
            >
                {loading ? <CircularProgress color={"inherit"} size={24} ></CircularProgress> : <Typography>Criar aula</Typography>}
            </Button>
        </Form>
    )
}

export default CreateClassForm