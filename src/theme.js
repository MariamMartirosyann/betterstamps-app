import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#a85e22",
    },
    secondary: {
      main: "#0f0f0f",
    },
  },
  components: {

  
   
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:"secondary",
          color:" primary"
        },
      },
    },
  },
});