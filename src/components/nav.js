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

        const navHeaderStyle = {paddingTop: "5px"};
        const logoStyle = {width: "35px"};
        const { isAuthenticated } = this.props.auth;

        return (
            <div className="navigation-bar">
                <nav className="navbar-header" style={navHeaderStyle}>
                    <a className="nav-logo" href="/">
                        <span className="">
                            <img src="logo.png" style={logoStyle} />
                            &nbsp;
                        </span>
                        <span className="spaced-out pts">
                            Calm Stats
                        </span>
                    </a>
                    <ul className="nav navbar-nav navbar-right pan">
                        {
                            !isAuthenticated() && (
                                <li>
                                    <a className="nav-button" href="#" onClick={this.login}>
                                        <i className="fa fa-sign-in"></i>
                                        &nbsp;&nbsp;Login
                                    </a>
                                </li>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <li>
                                    <a className="nav-button" href="#" onClick={this.logout}>
                                        <i className="fa fa-sign-out"></i>
                                        &nbsp;&nbsp;Logout
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>

        )
    }
}

