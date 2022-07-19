import { createMuiTheme } from "@material-ui/core/styles";
import {  secondaryColor, darkNeutralColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: darkNeutralColor,
            contrastText: "white"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "black"
        },
        variant: {
          main: darkNeutralColor,
          contrastText: "white"
        }
    },
    typography: {
        subtitle2: {
          fontWeight: 600 // or 'bold'
        }
      },
      typography: {
        button: {
          textTransform: "none"
        }
      }
});

export default theme