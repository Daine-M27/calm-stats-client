import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/homepage';
import Footer from './components/pagefooter';
import Dashboard from './components/dashboard';
// import Account from './components/account';
import Landing from './components/landing';
// import SignUp from './components/signup';




export default function App(props) {
    return (
        <Router>
            <div>
                <Nav />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/landing" component={Landing} />
                    {/*<Route exact path="/account/:id" component={Account} />*/}
                    {/*<Route exact path="/signup" component={SignUp} />*/}
                </main>

            </div>
        </Router>
    );
};
