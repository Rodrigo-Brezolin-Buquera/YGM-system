import {
    InputGroup,
    Image,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";
import ClosedEye from "../../assets/ClosedEye.svg"
import Eye from "../../assets/Eye.svg"

const Icon = ({img}) => {
    return <Image src={img} boxSize={"24px"} />
}

export const PasswordInput = ({ children, setShowPassword, showPassword }) => {
    return (
        <InputGroup>
            {children}
            <InputRightElement>
                <IconButton
                    variant='none'
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    icon={showPassword ? <Icon img={ClosedEye} /> :<Icon img={Eye} /> }
                    onClick={() => setShowPassword(!showPassword)}
                />
            </InputRightElement>
        </InputGroup>
    )
}

