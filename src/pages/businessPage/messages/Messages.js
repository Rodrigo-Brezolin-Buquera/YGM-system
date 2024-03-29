import { CircularProgress, Heading, Text, Textarea } from "@chakra-ui/react";
import { Line, LoadingButton, TextContainer } from "../../../theme";
import { useMessagesLogic } from "./useMessagesLogic";

export const Messages = () => {
    const { message, loading, editMessage, handleInput, input } =
    useMessagesLogic();

    if (loading) {
        return <CircularProgress isIndeterminate color="brand.200" size="160px" />;
    }

    return (
        <TextContainer alignItems={"center"}>
            <Heading alignSelf={"center"} size={"md"}>
              Mensagens
            </Heading>
            <Text alignSelf={"center"}> {message.content}</Text>

            <Textarea
                value={input}
                onChange={handleInput}
                placeholder="Nova mensagem"
            />
      
            <Line>
                <LoadingButton handler={editMessage} color={"brand.200"}>
                  Alterar
                </LoadingButton>
            </Line>
        </TextContainer>
    );
};
