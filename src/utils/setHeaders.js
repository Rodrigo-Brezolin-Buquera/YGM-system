export const setHeaders = () => {
    const token = localStorage.getItem("token")
    const auth = { 
        headers: { 
            Authorization: token
         } 
    }
    return auth    
}

