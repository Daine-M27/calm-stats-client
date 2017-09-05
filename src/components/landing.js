import React, { Component } from 'react';
import Auth from '../Auth/Auth.js'

import './css/landing.css'

export default class Landing extends Component{

    login() {
        const auth = new Auth();
        auth.login();
        // this.props.auth.login();
    }

    render(){

        return(
            <div className="col-md-12 pal">
                {/*description section*/}
                <div className="col-md-12 bor">
                    <h2 className="main-text text-center">
                        How to Use
                    </h2>
                </div>
                {/*instructions and screen shots*/}
                <div className="col-md-12 pal">
                    <div className="col-md-6 pam bor image-holder">
                        image here
                    </div>
                    <div className="col-md-6 pam bor text-holder">
                        text here
                    </div>
                </div>
                <div className="col-md-12 pal">
                    <div className="col-md-6 pam bor text-holder">
                        text here
                    </div>
                    <div className="col-md-6 pam bor image-holder">
                        image here
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-md-12 bor demo-account-info">
                        demo account information
                        <button className="demo-login-button" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}