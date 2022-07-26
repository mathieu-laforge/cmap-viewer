import * as React from "react"
import Seo from "../components/seo"
import { Footer } from "../layout/Main/components"
import theme from "../theme/muiTheme"
import { ThemeProvider } from "@mui/material"
import SignupSimple from "../components/SignupSimple"
import config from "../../config"

const Enregistrement = () => (
  <ThemeProvider theme={theme}>
    <Seo title={config.pages.signin.title} />
    <SignupSimple/>
    <Footer />
  </ThemeProvider>
)

export default Enregistrement