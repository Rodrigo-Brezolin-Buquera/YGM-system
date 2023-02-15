import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { createItem } from "../api";

export const RequestInput = ({ placeholder, itemCol, setLoading, loading }) => {
    const [text, setText] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            createItem(itemCol, { name: text })
                .then(()=>{
                    setText("")
                    setLoading(!loading)
                })
                .catch(err => console.log(err));
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