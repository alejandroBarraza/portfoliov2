import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Navbar } from '../components/navbar/Navbar';
import { Home } from '../views/Home';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};
