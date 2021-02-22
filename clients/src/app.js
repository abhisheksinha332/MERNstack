import React, {useEffect, useState} from 'react';
import { Container } from '@material-ui/core';
import {useDispatch } from 'react-redux';

import {getPosts} from './actions/Posts';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';

const App = () => {
   
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
    },[ dispatch]);

    return(
        <Container maxWidth="lg">
           <Navbar/>
          <Display />
        </Container>
    );
};

export default App;