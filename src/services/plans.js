import { BASE_URL } from '../constants/baseURL';
import axios from "axios";
import getAuth from './getAuth';

export const createPlan = (form, userId, setNewRender, newRender) => {
    const URL = `${BASE_URL}/plans`
    const headers = getAuth()
    const body = {
        "type": form.type,
        "frequency": form.frequency,
        "planStarted": form.planStarted,
        userId
    }

    axios.post(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
            setNewRender(!newRender)
        })
        .catch((err) => {
            alert(err)
            console.log(err.response.data)
        })
}

export const editPlan = (body, planId) => {
    const URL = `${BASE_URL}/plans/${planId}`
    const headers = getAuth()

    axios.put(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err)
            console.log(err.response.data)
        })
}

export const getClosedPlans = (userId, setClosedPlans) => {
    const planURL = `${BASE_URL}/plans/${userId}?status=inactive`
    const headers = getAuth()

    axios.get(planURL, headers)
        .then((res) => {
            setClosedPlans(res.data.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const changePlanStatus = (planId) => {
    const planURL = `${BASE_URL}/plans/status/${planId}`
    const headers = getAuth()
    const body = {}

    axios.put(planURL, body, headers)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const addClassToPlan = (planId) => {
    const planURL = `${BASE_URL}/plans/classes/${planId}`
    const headers = getAuth()
    const body = {}

    axios.put(planURL, body, headers)
        .then((res) => {
            console.log(res.data.message)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const removeClassFromPlan = (planId) => {
    const planURL = `${BASE_URL}/plans/classes/${planId}?action=remove`
    const headers = getAuth()
    const body = {}

    axios.put(planURL, body, headers)
        .then((res) => {
            console.log(res.data.message)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}


export const findUserNameByplan = (planId, setStudentName) => {
    const URL = `${BASE_URL}/plans/planId/${planId}`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            const userId = res.data.data.plan.userId
            const URLUser = `${BASE_URL}/users/${userId}`

            axios.get(URLUser, headers)
                .then((res) => {

                    setStudentName(res.data.data.name)
                })
                .catch((err) => {
                    console.log(err.response)
                })
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const findPlans = (user, setCurrentUser) => {
    const URL = `${BASE_URL}/plans/list`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            const plansList = res.data.data
            let mainPLan = plansList.find((plan) => plan.status === 1)

            if (!mainPLan.length) {
                mainPLan = plansList.reverse()
            }

            const finaluser = {
                ...user,
                plans: mainPLan
            }
            setCurrentUser(finaluser)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}


export const getUsersPlans = (users, setUsers) => {
    const headers = getAuth()
    const userList = []

    for (let user of users) {
        const URL = `${BASE_URL}/plans/${user.id}`
        axios.get(URL, headers)
            .then((res) => {
                const plansList = res.data.data
                let mainPLan = [plansList.find((plan) => plan.status === 1)]

                if (mainPLan[0] === undefined) {
                    mainPLan = plansList
                }

                const finaluser = {
                    ...user,
                    plans: mainPLan
                }
                userList.push(finaluser)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    setUsers(userList)
}

export const getPlanByUser = (user, setUser) => {
    const URL = `${BASE_URL}/plans/${user.id}`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            const plansList = res.data.data
            let mainPLan = [plansList.find((plan) => plan.status === 1)]

            if (mainPLan[0] === undefined) {
                mainPLan = plansList
            }

            const finaluser = {
                ...user,
                plans: res.data.data
            }
            setUser(finaluser)
        })
        .catch((err) => {
            console.log(err.response)
        })
}