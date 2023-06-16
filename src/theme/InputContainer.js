import { Box } from "@chakra-ui/react";
const InputContainer = ({children}) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"0.5em"}
            width={"100%"}
            margin={"0.5em"}
        >
            {children}


        </Box>
    );
  
}

export default InputContainer