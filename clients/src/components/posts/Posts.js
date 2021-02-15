import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post/Post';

import useStyles from './styles';

const Posts = () => {
    const Posts = useSelector((state)=> state.Posts);
    const classes = useStyles();
    console.log(Posts);
    return(
        <>
        <h1>Posts</h1>
        <Post />
        </>
    )
}

export default Posts;