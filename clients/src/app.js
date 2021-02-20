import React, {useEffect, useState} from 'react';
import { Container, AppBar, Typography, Grow , Grid} from '@material-ui/core';
import {useDispatch } from 'react-redux';

import {getPosts} from './actions/Posts';

import feeds from './images/pen.png';
import Posts from './components/posts/Posts'
import Form from './components/form/Form';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
    },[ dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar } position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Message Feeds</Typography>
                <img className={classes.image} src={feeds} alt="feeds" height="120" />
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
};

export default App;