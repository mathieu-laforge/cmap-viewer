import React from 'react'
import { Button } from "@mui/material"
import { ThemeProvider } from "@mui/material"
import theme from "../../theme/muiTheme"
import Box from "@mui/material/Box"
import { postRequestApi } from '../../utils'

const RequestButton = (props) => {
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
          
          onClick={()=> postRequestApi(props.data)}
        >
          {props.text}
        </Button>
        </Box>
      </ThemeProvider>
    </>
  )
}
export default RequestButton
