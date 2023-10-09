import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import toastAlert from "../components/toastAlert";
import { getHeaders } from "../utils/storageManager";
import { api } from "../api/config";


export const useRequestParamsData = (path, id, trigger) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await api.get(path, getHeaders());
            setData(res.data.result);
        } catch (err) {
            toastAlert(toast, err.response?.data ? err.response.data : "Erro inesperado tente novamente"   , "error");
        } finally {
            setLoading(false);
        }
    }; 

    useEffect(() => {
        if(id) {
            fetchData()
        }
    }, [id, trigger]);

    return {data, loading }



}

