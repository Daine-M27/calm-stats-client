import Auth from '../Auth/Auth.js';
// console.log(Auth);
import React from 'react';

import './css/nav.css';


export default class Nav extends React.Component {

    constructor() {
        super()
    }

    login() {
        const auth = new Auth();
        auth.login();
        // this.props.auth.login();
    }

    logout() {
        const auth = new Auth();
        auth.logout();
    }

    render() {
        return (
            <div className="navigation-bar">
                <nav className="navbar-header">
                    <a className="nav-logo" href="/">Calm Stats</a>
                    <ul className="navbar-right">
                        <li>
                            <a className="nav-button" href="#" onClick={this.login}>Login</a>
                        </li>
                        <li>
                            <a className="nav-button" href="#" onClick={this.logout}>Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

