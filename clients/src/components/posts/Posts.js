import React from 'react';

import {Grid, CircularProgress } from '@material-ui/core';
import Post from './post/Post';
import { useSelector } from 'react-redux';


import useStyles from './styles';

const Posts = ({setCurrentId}) => {
    const Posts = useSelector((state)=> state.Posts);
    const classes = useStyles();
    console.log(Posts);
    return(
       !Posts.length ? <CircularProgress /> : (
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
               {Posts.map((post)=> (
                   <Grid key={post._id} item  xs={12} sm={6}>
                        <Post Post={post} setCurrentId={setCurrentId} />     
                   </Grid> 
               ))}
           </Grid>
       )
    );
}

export default Posts;