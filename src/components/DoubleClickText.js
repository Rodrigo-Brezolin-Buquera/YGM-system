import {  Text } from "@chakra-ui/react";
import { useState } from "react";

export const DoubleClickText = (props) => {
    const [text, setText] = useState(props.text);
    const [showInput, setShowInput] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // props.handler()
            setShowInput(false)
        }
    };

    const onChange = (e) => setText(e.target.value)

    const onBlur = () => {
        // props.handler()
        setShowInput(false)
    } 

    return (
        <>
            {
                showInput ?
                    (
                        <input
                            type={"text"}
                            value={text}
                            onChange={onChange}
                            onBlur={onBlur}
                            onKeyPress={handleKeyPress}
                            autoFocus         
                        />
                    )
                    :
                    (
                        <Text
                            onDoubleClick={() => setShowInput(true)}
                        >
                            {text}
                        </Text>
                    )
            }
        </>
    );
}

