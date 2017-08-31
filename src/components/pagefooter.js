import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './css/nav.css';

export default function Footer(props){
    return (
        <div className="footer-bar">
            <footer className="">
                <a className="footer-logo" href="/">Calm Stats Footer</a>
                <ul className="footer-right">
                    <li><a className="footer-button" href="/login">Login</a></li>
                </ul>
            </footer>
        </div>

    )

}