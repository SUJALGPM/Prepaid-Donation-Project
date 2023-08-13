import React from 'react'
import './Signup.css';
import { NavLink } from 'react-router-dom';
import Base from '../../components/Base/Base';
import { Button, Container, Grid, Paper, TextField } from '@mui/material'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Signup = () => {
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
                                <h1 className='text-center'>SIGN UP</h1>
                                <Grid item>
                                    <TextField
                                        type='name'
                                        fullWidth
                                        label='Username'
                                        placeholder='Enter Username'
                                        variant='outlined' />
                                </Grid>
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
                                <Grid item>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        label='Contact No'
                                        placeholder='Enter Contact Number'
                                        variant='outlined' />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        fullWidth
                                        id="outlined-textarea"
                                        label="Address"
                                        placeholder="Enter Address"
                                        multiline
                                    />
                                </Grid>
                                <Grid marginTop={3} container justifyContent="center">
                                    <Grid item >
                                        <Button variant="contained" type='Submit'>Sign Up</Button>
                                    </Grid>
                                </Grid>
                                <Grid marginTop={3} container justifyContent="center">
                                    <Grid item >
                                        <p>Already have an account?<NavLink to="/login" style={{ marginLeft: 5 }}>Log in</NavLink></p>
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
    )
}

export default Signup;
