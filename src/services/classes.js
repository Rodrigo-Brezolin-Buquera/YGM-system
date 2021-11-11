import { BASE_URL } from '../constants/baseURL';
import axios from "axios";
import getAuth from './getAuth';

export const findAllClasses = (setClasses) => {
    const URL = `${BASE_URL}/classes`
    const headers = getAuth()
    
    axios.get(URL, headers)
         .then((res) => {
            setClasses(res.data.data)
         })
         .catch((err) => {
             alert(err.response)
         })   
}

export const createClasses = (body, setClasses) => {
    const URL = `${BASE_URL}/classes`
    const headers = getAuth()

    axios.post(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
            findAllClasses(setClasses)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const deleteClass = ({classGroupId, date}, setClasses) => {
    const URL = `${BASE_URL}/classes/${classGroupId}/${date}`
       const headers = getAuth()
   
    axios.delete(URL, headers)
        .then((res) => {
            alert(res.data.message)
            findAllClasses(setClasses)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const findClassById = (classId, setYogaClass) => {
    const URL = `${BASE_URL}/classes/${classId}`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            setYogaClass(res.data.data)
        })
        .catch((err) => {
            alert(err.response.data)
        })  
}


