import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link } from "gatsby"
import Typography from "@mui/material/Typography"
import config from "../../../../../config"
import imageConfig from "../../../../../imageConfig"

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={0}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box display={"flex"} width={80}>
            <Link to={config.pages.accueil.link} title={config.pages.accueil.title}>
              <Box component={"img"} src={imageConfig.logo.dislex.src} alt={imageConfig.logo.dislex.alt} height={1} width={1} />
            </Link>
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={2}>
              <Link
                style={{ textDecoration: "none" }}
                to={config.pages.accueil.link}
                title={config.pages.accueil.title}
              >
                <Button variant="text" color="primary">
                  Accueil
                </Button>
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                style={{ textDecoration: "none" }}
                to={config.pages.signup.link}
                title={config.pages.signup.title}
              >
                <Button variant="text" color="primary">
                  Créer un compte
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box marginTop={{ xs: "16px", sm: "0px", md: "0px" }}>
          <Typography
            align={"center"}
            variant={"subtitle2"}
            color="text.secondary"
            gutterBottom
          >
            &copy; Dislex + Dislex Reader + LaumeData 2022, Québec. Tous droits
            réservés.
          </Typography>
          <Typography
            align={"center"}
            variant={"caption"}
            color="text.secondary"
            component={"p"}
          >
            Les icônes et les images de cette application proviennent d'une
            liscence <a href="https://www.flaticon.com/fr/">flatIcon</a>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
