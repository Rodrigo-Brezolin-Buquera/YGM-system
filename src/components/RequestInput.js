import { Input } from "@chakra-ui/react";
import { useState } from "react";

export const RequestInput = ({ placeholder, handler }) => {
    const [text, setText] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // handler()
        }
    }

    const onChange = (e) => setText(e.target.value)

    // const onBlur = () => handler()

    return (
        <Input
            width={"100%"}
            variant={"filled"}
            type="text"
            value={text}
            onChange={onChange}
            // onBlur={onBlur}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            autoFocus
        />
    )
}