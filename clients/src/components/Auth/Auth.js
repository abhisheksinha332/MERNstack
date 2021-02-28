import React,{useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import {useHistory} from 'react-router-dom';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import FormInput from './FormInput';
import {useDispatch } from 'react-redux';
import {signup, signin} from '../../actions/auth';


const Auth = () => {
    const initialState = {fname:'',lname:'',email:'',password:'',confirmPassword:''};
    const [showPassword, setShowPassword]= useState(false);
    const [signUp, setSignUp] = useState(false);
    const [submit, setSubmit] = useState(initialState);
    const classes= useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = (e) =>{
        e.preventDefault();
       
        if(signUp){
            dispatch(signup(submit, history));
        }
        else{
            dispatch(signin(submit, history))
        }
    }

    const changeHandler = (e) => {
        setSubmit({...submit,[e.target.name]:e.target.value})
    }
    const showPasswordHandler = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const statusHandler = () => {
        setSignUp((prevSignUp)=> !prevSignUp); 
        setShowPassword(false); 
    }

     const googleSuccess = async(res) => {
        const token = res?.tokenId;
        const result = res?.profileObj;

        try {
            dispatch({ type:'AUTH', data:{ result, token }});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
     };

     const googleFailure = () => {
        alert("Google Sign In was unsuccessful... Try Again");
     };

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
                                   
                                        <FormInput name="fname" changeHandler={changeHandler} label="First Name" autoFocus half />
                                 
                                   
                                        <FormInput name="lname" changeHandler={changeHandler} label="Last Name" half />
                               
                                    </>                               
                                     ) 
                                    
                                
                            }
                            <FormInput name="email" label="Email Address" changeHandler={changeHandler} type="email" />
                            <FormInput name="password" label= "Password" changeHandler={changeHandler} type={showPassword?"text":"password"} showPasswordHandler={showPasswordHandler} />
                            { signUp && <FormInput name="confirmPassword" label="Confirm Password" changeHandler={changeHandler} type="password"   />  }
                        </Grid>
                        <Button type="submit" style={{marginTop:'10px'}} className={classes.Button} fullWidth variant="contained" color="primary">{signUp ? 'Sign Up' : 'Sign In'}</Button>
                        <GoogleLogin 
                            clientId="786629392586-994c2dbio06dvu1oqu887krqpfig0uki.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} style={{marginTop:'20px', background:'#489C17'}} color="primary" fullWidth onClick={renderProps.onClick} variant="contained" disabled={renderProps.disabled}  >Sign In using Google</Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
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
