import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';

export default props => {

    return(
    <Router>
        <Route exact path ='/'>
            <Login/> 
        </Route>

        <Route exact path = '/home'>
            <Home/>
        </Route>

        <Route exact path = '/logoff'>
            <Login/>
        </Route>
    </Router>
)}