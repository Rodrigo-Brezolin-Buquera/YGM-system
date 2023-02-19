import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { updateItem } from "../api";

export const DoubleClickText = (props) => {
    const [text, setText] = useState("");
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        setText(props.text)
    }, [props.text])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            updateItem(props.itemCol, { [props.atribute]: text }, props.id)
                .catch((err) => console.log(err.message));
            setShowInput(false)
        }
    };

    const onChange = (e) => setText(e.target.value)

    return (
        <>
            {
                showInput ?
                    (
                        <input
                            size={props.size || "auto"}
                            type={"text"}
                            value={text}
                            onChange={onChange}
                            onBlur={() => setShowInput(false)}
                            onKeyPress={handleKeyPress}
                            autoFocus
                        />
                    )
                    :
                    (
                        <Text
                            whiteSpace="wrap"
                            wordBreak="break-all"
                            onDoubleClick={() => setShowInput(true)}
                        >
                            {text}
                        </Text>
                    )
            }
        </>
    );
}

