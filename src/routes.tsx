import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/HomePage';
import Footer from './pages/Footer'

function Routes() {
    return (
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
        </Router>
    )
}

export default Routes;


