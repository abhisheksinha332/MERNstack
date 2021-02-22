import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Button, Typography, Toolbar} from '@material-ui/core';
import feeds from '../../images/pen.png';
import useStyles from './style';
const Navbar = () => {
    const classes = useStyles();  

    const user = null;
    return(
        <div>
             <AppBar className={classes.appBar } position="static" color="inherit">
                 <div className={classes.brandContainer}>
                 <Typography  className={classes.heading} component={Link} to="/" variant="h2" align="center">Message Feeds</Typography>
                <img className={classes.image} src={feeds} alt="feeds" height="120" />
                 </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (<div className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.chatAt(0)}
                            <Typography variant="h6"  className={classes.userName}>{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
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