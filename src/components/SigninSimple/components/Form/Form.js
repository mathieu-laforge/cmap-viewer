/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const Form = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        
        <Typography
          variant="h3"
          fontWeight= {{ xs: 300, md: 500, lg: 700 }}
          
        >
          Une nouvelle aventure?
        </Typography>
        <Typography color="text.secondary">
          Connecte-toi!
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'h5'} sx={{ marginBottom: 2 }}>
              Entre ton nom d'utilisateur
            </Typography>
            <TextField
              label="nom d'utilisateur *"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="stretched"
              justifyContent={'space-between'}
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={1}>
                <Typography variant={'h5'}>
                  Entre ton mot de passe
                </Typography>
              </Box>
              <Typography variant={'subtitle2'}>
                <Link
                  component={'a'}
                  color={'primary'}
                  href={'/password-reset-simple'}
                  underline={'none'}
                >
                  Tu as oublié ton mot de passe?
                </Link>
              </Typography>
            </Box>
            <TextField
              label="mot de passe *"
              variant="outlined"
              name={'password'}
              type={'password'}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="stretched"
              justifyContent={'space-between'}
              width={1}
              maxWidth={600}
              margin={'0 auto'}
            >
              <Box marginBottom={1}>
                <Typography variant={'subtitle2'}>
                  Nouveau?{' '}
                  <Link
                    component={'a'}
                    color={'primary'}
                    href={'/signup-simple'}
                    underline={'none'}
                  >
                    Inscris-toi vite!
                  </Link>
                </Typography>
              </Box>
              <Button size={'medium'} variant={'contained'} type={'submit'} >
                Entrer!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
