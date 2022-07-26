import React from 'react'
import { Button } from "@mui/material"
import { ThemeProvider } from "@mui/material"
import theme from '../../theme/muiTheme'
import Box from "@mui/material/Box"

const FilledButton = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
        <Button
          variant="contained"
          color="secondary"
          underline="none"
          component="a"
          onClick={props.onClick}
          
        >
          {props.text}
        </Button>
        </Box>
      </ThemeProvider>
    </>
  )
}
export default FilledButton
