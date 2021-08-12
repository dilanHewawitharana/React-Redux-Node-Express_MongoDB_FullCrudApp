import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();

    const isSignup = false;

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };
    
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <Form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <TextField name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6}/>
                                </>
                            )
                        }
                    </Grid>
                </Form>
            </Paper>
        </Container>
    );
};

export default Auth;