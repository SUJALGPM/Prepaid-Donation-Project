import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Grid, Link, Paper, TextField } from '@mui/material'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Base from '../../components/Base/Base';

const Login = () => {
    return (
        <Base>
            <div className='background_image'>
                < Container maxWidth='sm'>
                    <Grid container spacing={2}
                        direction="column"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}>
                        <Paper elevation={2} sx={{ padding: 5 }}>
                            <Grid container direction="column" spacing={2}>
                                <h1 style={{ marginLeft: 188 }}>LOG IN</h1>
                                <Grid item>
                                    <TextField
                                        type='email'
                                        fullWidth
                                        label='Email'
                                        placeholder='Enter email'
                                        variant='outlined' />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        type='password'
                                        fullWidth
                                        label='Password'
                                        placeholder='Enter Password'
                                        variant='outlined'
                                    />

                                </Grid>


                                <Grid marginTop={3} container justifyContent="center">
                                    <Grid item >
                                        <Button variant="contained">Log In </Button>
                                    </Grid>
                                </Grid>
                                <Grid marginTop={3} container justifyContent="center">
                                    <Grid item >
                                        <p>Don't have an account?<NavLink to="/register"> Sign Up</NavLink></p>
                                    </Grid>
                                </Grid>
                                <Grid style={{ textAlign: 'center' }}>
                                    <hr style={{ width: '45%', display: 'inline-block', margin: '0 5px' }} />
                                    <span style={{ display: 'inline-block' }}>or</span>
                                    <hr style={{ width: '45%', display: 'inline-block', margin: '0 5px' }} />
                                </Grid>
                                <Grid container justifyContent="center">

                                    <GoogleOAuthProvider clientId="463926277819-0gij5e1d4hupskhg32fcrvgi6qiu76v5.apps.googleusercontent.com">
                                        <GoogleLogin
                                            onSuccess={credentialResponse => {
                                                var decoded = jwt_decode(credentialResponse.credential);
                                                console.log(decoded);
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        />
                                    </GoogleOAuthProvider>

                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>
                </Container>
            </div>
        </Base>
    );
};

export default Login;
