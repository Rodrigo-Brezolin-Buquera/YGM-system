import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { api } from "../api/config";
import toastAlert from "../components/toastAlert";
import { getHeaders } from "../utils/storageManager";

export const useRequestData = (path, trigger) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await api.get(path, getHeaders());
            setData(res.data.result);
        } catch (err) {
            toastAlert(toast, err.response.data, "error");
        } finally {
            setLoading(false);
        }
    }; 

    useEffect(() => {
        fetchData()
    }, [trigger]);

    return {data, loading, setLoading }
}
