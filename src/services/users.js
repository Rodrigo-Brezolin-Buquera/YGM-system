import { goToAdmin, goToUser } from '../routes/coordinator';
import { BASE_URL } from '../constants/baseURL';
import axios from "axios";
import * as jwt from "jsonwebtoken";
import getAuth from './getAuth';
import { createPlan, findPlans, getPlanByUser, getUsersPlans } from './plans';

export const login = (body, history) => {
    const URL = `${BASE_URL}/users/login`

    axios.post(URL, body)
        .then((res) => {
            const token = res.data.data.token
            localStorage.setItem("token", res.data.data.token)

            const { role, id } = jwt.verify(token, process.env.REACT_APP_JWT_KEY)

            if (role === "student") {
                goToUser(history, id)
            } else if (role === "teacher" || role === "visitor" || role === "admin") {
                goToAdmin(history)
            } else {
                alert("authentication problem, try again")
            }
        })
        .catch((err) => {
            alert(err.message)
        })
}


export const findUser = (setCurrentUser) => {
    const URL = `${BASE_URL}/users`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            const user = res.data.data
            findPlans(user, setCurrentUser)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}


export const getUsers = (setUsers) => {
    const URL = `${BASE_URL}/users/list`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            const users = res.data.data
            getUsersPlans(users, setUsers)
        })
        .catch((err) => {
            alert(err.response.data)
        })

}

export const getUserById = (userId, setUser) => {
    const URL = `${BASE_URL}/users/${userId}`
    const headers = getAuth()

    axios.get(URL, headers)
        .then((res) => {
            const user = res.data.data
            getPlanByUser(user, setUser)
            
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const createUser = (form) => {

    const URL = `${BASE_URL}/users`
    const body = {
        name: form.name,
        email: form.email
    }
    const headers = getAuth()

    axios.post(URL, body, headers)
        .then((res) => {

            alert(res.data.message)
            const userId = res.data.data.id
            createPlan(form, userId)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const editUserById = (userId, body) => {
    const URL = `${BASE_URL}/users/${userId}`
    const headers = getAuth()

    axios.put(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const editUser = (body) => {
    const URL = `${BASE_URL}/users`
    const headers = getAuth()

    axios.put(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const sendValidationCode = () => {
    const URL = `${BASE_URL}/users/validation`
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

export const changePassword = (body) => {
    const URL = `${BASE_URL}/users/changePassword`
    const headers = getAuth()

    axios.put(URL, body, headers)
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}


export const sendNewPassword = (id) => {
    const URL = `${BASE_URL}/users/newPassword/${id}`
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

