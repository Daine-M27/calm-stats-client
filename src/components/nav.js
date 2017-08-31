
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './nav.css';

export function Nav(props){
    return (
        <div className="navigation-bar">
            <nav className="navbar-header">
                <a className="nav-logo" href="/">Calm Stats</a>
            </nav>
        </div>

    )

}