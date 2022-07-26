import * as React from "react"
import { Main } from "../layout"
import Seo from "../components/seo"
import theme from "../theme/muiTheme"
import { ThemeProvider } from "@mui/material"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Seo title="Home" />

      <div>Bienvenue</div>
    </Main>
  </ThemeProvider>
)

export default IndexPage
