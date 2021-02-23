import React,{useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import FormInput from './FormInput';

const Auth = () => {
    const [showPassword, setShowPassword]= useState(false);
    const [signUp, setSignUp] = useState(false);
    const classes= useStyles();

    const submitHandler = () =>{

    }

    const changeHandler = () => {

    }
    const showPasswordHandler = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const statusHandler = () => {
        setSignUp((prevSignUp)=> !prevSignUp); 
        showPasswordHandler(false);
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutLinedIcon /> 
                    </Avatar>
                    <Typography variant="h5">{signUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <Grid container spacing={2}>
                            {
                                signUp && (
                                    <>
                                   
                                        <FormInput name="firstName" changeHandler={changeHandler} label="First Name" autoFocus half />
                                 
                                   
                                        <FormInput name="firstName" changeHandler={changeHandler} label="First Name" half />
                               
                                    </>                               
                                     ) 
                                    
                                
                            }
                            <FormInput name="email" label="Email Address" changeHandler={changeHandler} type="email" />
                            <FormInput name="password" label= "Password" changeHandler={changeHandler} type={showPassword?"text":"password"} showPasswordHandler={showPasswordHandler} />
                            { signUp && <FormInput name="confirm Password" label="Confirm Password" changeHandler={changeHandler} type="password"   />  }
                        </Grid>
                        <Button type="submit" className={classes.Button} fullWidth variant="contained" color="primary">{signUp ? 'Sign Up' : 'Sign In'}</Button>
                        <Grid container justify="flex-end">
                            <Grid item >
                                <Button onClick={statusHandler}>{signUp ? 'Already have an account ? Sign In': 'New user ? Sign Up'}</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Auth
