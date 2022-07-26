import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import imageConfig from "../../../imageConfig"
import config from "../../../config"
import Container from '../container';
import { Form } from './components';

const SignupSimple = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
          <Grid container spacing={6}>
            {!isMd ? (
              <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}>
              <Box height={1} width={1} maxWidth={350} display={'flex'} justifyContent={'center'}>
              <Box 
                    component={'img'}
                    src={
                      imageConfig.logo.dislex.src
                    }
                    alt={imageConfig.logo.dislex.alt}
                    height={"100px"}
                    />
              <Box 
                    component={'img'}
                    src={
                      imageConfig.logo.dragon.src
                    }
                    alt={imageConfig.logo.dragon.alt}
                    width={"100px"}
                    height={"100px"}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}/>
              </Box>
            </Grid>
            ): null}
            
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Form />
            </Grid>
            {isMd ? (
              <Grid item container justifyContent={'center'} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={'img'}
                    src={
                      imageConfig.logo.dragon.src
                    }
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.8)'
                          : 'none',
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Box>
    
  );
};

export default SignupSimple;
