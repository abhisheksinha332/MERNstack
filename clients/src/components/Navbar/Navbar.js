import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { AppBar, Button, Typography, Toolbar} from '@material-ui/core';
import feeds from '../../images/pen.png';
import useStyles from './style';
const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
       
    }, [location]);

    const logout = () => {
        dispatch({type:'LOGOUT', });
        history.push('/');

        setUser(null);
    }

    const classes = useStyles();  
    


    return(
        <div>
             <AppBar className={classes.appBar } position="static" color="inherit">
                 <div className={classes.brandContainer}>
                 <Typography  className={classes.heading} component={Link} to="/" variant="h2" align="center">Message Feeds</Typography>
                <img className={classes.image} src={feeds} alt="feeds" height="120" />
                 </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (<div className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}
                            <Typography variant="h6"  className={classes.userName}>{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                    
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;