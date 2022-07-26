import React from "react"
import Box from "@mui/material/Box"
import { ThemeProvider } from "@mui/material"
import theme from "../../theme/muiTheme"
import { Form } from "./components"
import { Link } from "gatsby"
import config from "../../../config"
import imageConfig from "../../../imageConfig"

const SigninSimple = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        position={"relative"}
        minHeight={"calc(100vh - 247px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginBottom={"32px"}
        height={1}
      >
        <Link to={config.pages.accueil.link} title={config.pages.accueil.title}>
          <Box
            height={1}
            width={350}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box component={"img"} alt={imageConfig.logo.dislex.alt} src={imageConfig.logo.dislex.src}></Box>
            <Box component={"img"} alt={imageConfig.logo.dragon.alt} src={imageConfig.logo.dragon.src} width={75} height={75} />
          </Box>
        </Link>
        <Box height={1} width={350}>
          <Form />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default SigninSimple
