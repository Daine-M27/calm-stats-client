
import React from 'react';

import './css/nav.css';


// I think i need to change this to be a class but im not sure.
export default function Nav(props){


    // login() {
    //     this.props.auth.login();
    // }

    return (
        <div className="navigation-bar">
            <nav className="navbar-header">
                <a className="nav-logo" href="/">Calm Stats</a>
                <ul className="navbar-right">
                    <li>
                        <a className="nav-button" href="#">Login</a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}