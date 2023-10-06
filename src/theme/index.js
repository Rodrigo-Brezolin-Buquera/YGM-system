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
            600: "#ddae27cc",
            700: "#95C3C4"
         }  
    }
});

export default theme;

export {default as WrapContainer} from "./components/WrapContainer";
export {default as FormButton} from "./components/FormButton";
export {default as Header} from "./components/Header";
export {default as LoadingButton} from "./components/LoadingButton";
export {default as ModalComponent} from "./components/ModalComponent";
export {default as SideContainer} from "./components/SideContainer";
export {default as MainContainer} from "./components/MainContainer";
export {default as Background} from "./components/Background";
export {default as TextContainer} from "./components/TextContainer";
export {default as Line} from "./components/Line";
export {default as CircularCard} from "./components/CircularCard";
export {default as SquareCard} from "./components/SquareCard";



