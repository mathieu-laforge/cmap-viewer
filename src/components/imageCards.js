import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import theme from "../theme/muiTheme"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import { ThemeProvider } from "@mui/material"


export default function ImageCards(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width: 175, height: 250 }}>
        <CardMedia
          alt={props.alt}
          style={{ height: 203.25 }}
          image={props.image}
        />

        <CardActions>
          <Button size="small" onClick={props.update}>
            Modifier
          </Button>
          <Button size="small" onClick={props.deleteImage}>
            supprimer
          </Button>
        </CardActions>
        
      </Card>
    </ThemeProvider>
  )
}
