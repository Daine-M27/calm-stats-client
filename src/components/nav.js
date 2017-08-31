
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './css/nav.css';

export default function Nav(props){
    return (
        <div className="navigation-bar">
            <nav className="navbar-header">
                <a className="nav-logo" href="/">Calm Stats</a>
                <ul className="navbar-right">
                    <li><a className="nav-button" href="/login">Login</a></li>
                </ul>
            </nav>
        </div>

    )

}