import Wrapper from '../../components/wrapper';
import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from "../../components/container";
import { Footer } from '../Main/components';

const CredentialLayout = ({ children }) => {
  
  
  
  
    return (
    <Wrapper>
      <Box style={{ maxWidth:"600px", padding:"0px"}}>
        <Divider />

        {children}

        <Divider />
        <Container paddingY={4} paddingX={0} >
          <Footer />
        </Container>
      </Box>
    </Wrapper>
  )
}

export default CredentialLayout