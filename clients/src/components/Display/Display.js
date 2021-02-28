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
            <Grid item xs={11} sm={11} md={11}>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            
              
                <Transition currentId={currentId} setCurrentId={setCurrentId}/>
           
        </Grid>
    </Grow>
    )
}

export default Display;


