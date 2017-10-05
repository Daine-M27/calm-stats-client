import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import Callback from './Callback/Callback';
import Nav from './components/nav';
import Home from './components/homepage';
import Footer from './components/pagefooter';
import Dashboard from './components/dashboard';
import Landing from './components/landing';
import Auth from './Auth/Auth';
import history from './history';


const auth = new Auth();



export default function App(props) {
    return (
        <Router history={history} component={App}>
            <div>
                <Nav auth={auth} {...props} />
                <main>
                    <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                    <Route exact path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
                    <Route exact path="/landing" component={Landing} />
                    <Route exact path="/callback" render={(props) => <Callback auth={auth} {...props} />} />
                </main>
                 <Footer auth={auth} {...props}/>
            </div>
        </Router>
    );
};
