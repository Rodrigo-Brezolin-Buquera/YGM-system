import { CircularProgress, Button } from "@chakra-ui/react"

const FormButton = ({ isSubmitting, color, loading, children }) => {

    return (
        <Button
            mt={4}
            bg={color}
            isLoading={isSubmitting}
            type="submit"
            borderRadius={"10px"}
            w={"100%"}
          
        >
            {loading ?
                <CircularProgress isIndeterminate color={color} size="30px" />
                :
                children
            }
        </Button>
    )
}

export default FormButton