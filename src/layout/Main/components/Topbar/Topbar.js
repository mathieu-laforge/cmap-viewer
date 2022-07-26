import React from "react"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import MenuIcon from "@mui/icons-material/Menu"

import { Link } from "gatsby"
import imageConfig from "../../../../../imageConfig"
import config from "../../../../../config"

const Topbar = ({ onSidebarOpen }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Link to={config.pages.accueil.link} title={config.pages.accueil.title}>
        <Box
          display={"flex"}
          width={{ xs: 100, md: 120 }}
        >
          <Box component={"img"} src={imageConfig.logo.dislex.src} alt={imageConfig.logo.dislex.alt} height={1} width={1} />
        </Box>
      </Link>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box marginLeft={4}>
          <Link style={{ textDecoration: "none" }} to={config.pages.signin.link} title={config.pages.signin.title}>
            <Button variant="contained" >Connexion</Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  )
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
}

export default Topbar
