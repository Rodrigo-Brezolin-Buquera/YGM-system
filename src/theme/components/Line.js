import { Box } from "@chakra-ui/react";

const Line = ({ children, justifyContent }) => {

    return (
        <Box
            display={"flex"}
            justifyContent={justifyContent | "center"}
            gap={"0.3em"}
            m={"0.1em"}
        >
            {children}
        </Box>
    );
}

export default Line;
