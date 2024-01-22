import { Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../api/config";
import { getHeaders } from "../../utils/storageManager";
import toastAlert from "../toastAlert";

export const DoubleClickText = (props) => {
    const [text, setText] = useState("");
    const [showInput, setShowInput] = useState(false);
    const toast = useToast()

    useEffect(() => {
        setText(props.text)
    }, [props.text])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            api.put(props.path, { [props.atribute]: text }, getHeaders())
                .catch((err) => {
                    toastAlert(toast, err.response.data || "Error ao editar", "error")
                });
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

