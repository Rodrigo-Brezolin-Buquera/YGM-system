import { extendTheme } from "@chakra-ui/react";

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

export {default as WrapContainer} from "./WrapContainer";
export {default as FormButton} from "./FormButton";
export {default as Header} from "./Header";
export {default as LoadingButton} from "./LoadingButton";
export {default as ModalComponent} from "./ModalComponent";
export {default as SideContainer} from "./SideContainer";
export {default as MainContainer} from "./MainContainer";
export {default as Background} from "./Background";
export {default as TextContainer} from "./TextContainer";
export {default as Line} from "./Line";
export {default as CircularCard} from "./CircularCard";
export {default as TextCard} from "./TextCard";
export {default as InputContainer} from "./InputContainer";
export {default as SquareCard} from "./SquareCard";



