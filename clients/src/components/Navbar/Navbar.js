import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import decode from 'jwt-decode';
import { layoutGenerator } from 'react-break';
import { AppBar, Button, Typography, Toolbar, Avatar} from '@material-ui/core';

import feeds from '../../images/pen.png';
import useStyles from './style';
const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
   
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const layout = layoutGenerator({
        mobile: 0,
        phablet: 550,
        tablet: 768,
        desktop: 992,
      });

        const OnMobile = layout.is('mobile');
        const OnAtLeastTablet = layout.isAtLeast('tablet');
        const OnAtMostPhablet = layout.isAtMost('phablet');
        const OnDesktop = layout.is('desktop');
  

    useEffect(() => {
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
       
    }, [location]);

    

    const logout = () => {
        dispatch({type:'LOGOUT', });
        history.push('/');

        setUser(null);
    }

    const classes = useStyles();  
    


    return(
        <div style={{marginBottom:'120px'}}>
            
             <AppBar className={classes.appBar } position="fixed"  color="inherit">
                 <div className={classes.brandContainer}>
                 <OnAtLeastTablet>
                 <img className={classes.image} src={feeds} alt="feeds" height="120" />
                </OnAtLeastTablet>
                 <Typography  className={classes.heading} component={Link} to="/" variant="h2" align="center">Insomnia</Typography>
               
                 </div>
                <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                     <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <OnAtLeastTablet>
                                <Typography variant="h6" className={classes.userName}>{user.result.name}</Typography>
                            </OnAtLeastTablet>
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