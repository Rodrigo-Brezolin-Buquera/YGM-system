import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { createItem } from "../api";

export const RequestInput = ({ placeholder, itemCol, setLoading }) => {
    const [text, setText] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            createItem(itemCol, { name: text })
                .then(()=>{
                    setText("")  
                    setLoading((prevState)=> !prevState)         
                })
                .catch(err => console.log(err.message));

            // setTimeout(setLoading((prevState)=> !prevState), 500)
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