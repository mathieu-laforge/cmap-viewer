import * as React from "react"
import { Main } from "../layout"
import Seo from "../components/seo"
import { UpLoadImage } from "../components"
import theme from "../theme/muiTheme"
import { ThemeProvider } from "@mui/material"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Seo title="Ajouter un Livre" />

      <UpLoadImage />
    </Main>
  </ThemeProvider>
)

export default IndexPage
