import { Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { createItem } from "../api";
import {toastAlert} from "../theme"

export const RequestInput = ({ placeholder, itemCol, setLoading }) => {
    const [text, setText] = useState("");
    const toast = useToast()

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            createItem(itemCol, { name: text })
                .then(()=>{
                    setText("")  
                    setLoading((prevState)=> !prevState)         
                })
                .catch(err => toastAlert(toast, err.message, "error"))

        }
    }

    const onChange = (e) => setText(e.target.value)

    return (
        <Input
            width={"100%"}
            variant={"filled"}
            type="text"
            value={text}
            onChange={onChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            autoFocus
        />
    )
}