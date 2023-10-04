import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import toastAlert from "../components/toastAlert";

export const useSubmit = (handler) => {
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    // const onSubmit = async () => {
    //     setLoading(true);
    //     try {
    //         await handler();
    //     } catch (err) {
    //         toastAlert(toast, err.message, "error");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return { loading }
}
