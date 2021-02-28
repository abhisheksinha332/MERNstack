import React from 'react';
import { Container } from '@material-ui/core';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';
import Auth from './components/Auth/Auth';

const App = () => {
   
   

    return(
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Display} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
                
            </Container>

        </BrowserRouter>
       
    );
};

export default App;