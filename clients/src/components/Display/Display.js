import React,{useState, useEffect} from 'react';
import {  Grow , Grid} from '@material-ui/core';
import Form from '../form/Form';
import Posts from '../posts/Posts';
import useStyles from '../../styles';
import Transition from './Transition';

import {useDispatch } from 'react-redux';
import {getPosts} from '../../actions/Posts';




const Display = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
    },[ dispatch]);
    return(
        <Grow in>
        <Grid className={classes.formBody} container  justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={3}>
                {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
                <Transition />
            </Grid>
        </Grid>
    </Grow>
    )
}

export default Display;


