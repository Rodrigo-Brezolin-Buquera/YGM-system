const getAuth = () => {
    const token = localStorage.getItem("token")
    const auth = { 
        headers: { 
            Authorization: token
         } 
    }
    return auth    
}

export default getAuth