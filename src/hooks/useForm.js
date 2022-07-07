import {useState} from 'react';

function useForm(initialValue) {
    const [form, setForm] = useState(initialValue)

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const cleanFields = () => {
        setForm({})
    }
    return [form, onChange, cleanFields, setForm]
}

export default useForm;