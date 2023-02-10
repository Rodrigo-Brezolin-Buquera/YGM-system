import { CircularProgress, Button, Box } from "@chakra-ui/react"

export const FormButton = ({ isSubmitting, color, loading, children }) => {

    return (
        <Box>
            {loading ?
                <CircularProgress isIndeterminate color={color} size="30px" />
                :
                <Button
                    minW={"120px"}
                    mt={4} 
                    bg={color} 
                    isLoading={isSubmitting} 
                    type="submit"
                    borderRadius={"10px"}
                >
                    {children}
                </Button>
            }
        </Box>
    )
}