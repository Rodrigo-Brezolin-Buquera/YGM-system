import { extendTheme } from "@chakra-ui/react";
export {default as ButtonContainer} from "./ButtonContainer";
export {default as FormButton} from "./FormButton";
export {default as Header} from "./Header";
export {default as LoadingButton} from "./LoadingButton";
export {default as LogoImg} from "./LogoImg";
export {default as ModalComponent} from "./ModalComponent";
export {default as SideContainer} from "./SideContainer";
export {default as MainContainer} from "./MainContainer";


const theme = extendTheme({
    fonts: {
     
    },
    colors:{
        brand: {
            100: "#62B6B7",
            200: "#F3C046",
            300: "#2D3748",
            400: "#f2f3f7",
            500: "#fafafa",
           

        }  
    }
});

export default theme;



