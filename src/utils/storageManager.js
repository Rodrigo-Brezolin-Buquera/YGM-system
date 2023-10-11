export const getHeaders = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        const auth = {
            headers: {
                Authorization: token
            }
        }
        return auth
    }
}

export const getStorageItem = (item) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem(item)
        return token
    }
}

export const setStorageItem = (item, value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(item, value)
    }
}

export const deleteStorageItem = (item) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(item)
    }
}




