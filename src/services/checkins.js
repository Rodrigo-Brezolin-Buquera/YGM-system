import { BASE_URL } from '../constants/baseURL';
import axios from "axios";
import getAuth from './getAuth';
import { addClassToPlan, removeClassFromPlan } from './plans';

export const getCheckinsByPlan = (planId, setCheckins) => {
    const URL = `${BASE_URL}/checkins/plan/${planId}`
    const headers = getAuth()
    
    axios.get(URL, headers)
        .then((res) => {
            setCheckins(res.data.data)  
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const createCheckin = (planId, classId) => {
    const URL = `${BASE_URL}/checkins/${classId}/${planId}`
    const headers = getAuth()
    const body = {}
 
    axios.post(URL, body, headers)
        .then((res) => {
            addClassToPlan(planId)
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const validateCheckin = (planId, classId) => {
    const URL = `${BASE_URL}/checkins/${classId}/${planId}`
    const headers = getAuth()
    const body = {}
 
    axios.put(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const deleteCheckin = (planId, classId) => {
    const URL = `${BASE_URL}/checkins/${classId}/${planId}`
    const headers = getAuth()
  
    axios.delete(URL, headers)
        .then((res) => {
            removeClassFromPlan(planId)
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const findCheckinByClassId = (classId, setCheckins) => {
    const URL = `${BASE_URL}/checkins/class/${classId}`
    const headers = getAuth()    

    axios.get(URL, headers)
        .then((res) => {
            setCheckins(res.data.data)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const verifyCheckin = (classId, planId, setCheckinButton) => {
    const URL = `${BASE_URL}/checkins/class/${classId}`
    const headers = getAuth()    

    axios.get(URL, headers)
        .then((res) => {
            const checkins = res.data.data
            const result = checkins.find((checkin) => checkin.planId === planId)
            result && result.classId ? setCheckinButton(true) : setCheckinButton(false)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}