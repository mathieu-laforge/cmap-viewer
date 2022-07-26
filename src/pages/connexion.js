import React from "react"
import Seo from "../components/seo"
import SigninSimple from "../components/SigninSimple"
import CredentialLayout from "../layout/Secondary"
import theme from "../theme/muiTheme"
import { ThemeProvider } from "@mui/material"
import config from "../../config"

const Enregistrement = () => (
  <ThemeProvider theme={theme}>
    <CredentialLayout>
      <Seo title={config.pages.signin.title} />
      <SigninSimple />
    </CredentialLayout>
  </ThemeProvider>
)

export default Enregistrement
