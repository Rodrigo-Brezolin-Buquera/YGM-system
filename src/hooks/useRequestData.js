import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../constants/baseURL';
import { setHeaders } from '../utils/setHeaders';

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const finalURL = `${BASE_URL}${url}`
    const getRequest = () => {
        axios.get(finalURL, setHeaders())
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.message)
                // alert('Ocorreu um erro, tente novamente')
            })
    }
    return [data, getRequest]
};