import React from 'react';
import Auth from '../Auth/Auth.js';
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
            <div className="footer-bar">
                <nav className="footer-header" style={navHeaderStyle}>
                    <a className="footer-logo" href="/">
                        <span className="pts font-allura">
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
                                    <a className="nav-button" href="/dashboard">
                                        <i className="fa fa-area-chart"/>
                                        &nbsp;&nbsp;Dashboard
                                    </a>
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