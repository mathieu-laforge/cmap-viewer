import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
      primary: {
        main: "#9c27b0",
        light: "#d05ce3",
        dark: "#6a0080",
        contrastText: "#fff",
      },
      secondary: {
        main: "#512da8",
        light: "#8559da",
        dark: "#140078",
        contrastText: "#fff",       
      },
    },
    typography: {
      fontFamily: "OpenDyslexic",
    },
    cardShadow: 'rgba(23, 70, 161, .11)',
    background: {
      paper: '#FAFAFA',
      default: '#FAFAFA',
      level2: '#f5f5f5',
      level1: '#FAFAFA',
    },
  })
export default theme 