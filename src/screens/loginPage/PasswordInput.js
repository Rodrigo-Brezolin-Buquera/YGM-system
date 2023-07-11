import {
    InputGroup,
    Image,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";

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
                    icon={showPassword ? <Icon img={"/assets/ClosedEye.svg"} /> :<Icon img={"/assets/Eye.svg"} /> }
                    onClick={() => setShowPassword(!showPassword)}
                />
            </InputRightElement>
        </InputGroup>
    )
}

