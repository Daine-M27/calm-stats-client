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

        const calmPageStyle = {"min-height": "1500px"}

        return(
            <div className="col-md-12 pal bg-calm" style={calmPageStyle}>
                
                <div className="col-md-12">
                    <h3 className="main-text text-center spaced-out text-white">
                        How to Use
                    </h3>
                </div>

                <div className="col-md-12 pal">

                    <div className="image-one col-md-6 pam image-holder min-height-500 bor">
                        <p className="text-white text-center"></p>
                    </div>
                    <div className=" col-md-6 pam text-holder pal">
                        <p className="text-white text-center pal">Once a user signs up, they can use the search function to find a favorite type of meditation music.  After that,
                            select a video and press play.  The site will start a timer when you press play and stop it when pause is pressed.</p>
                    </div>
                </div>
                <div className="col-md-12 pal">
                    <div className="col-md-6 pam text-holder pal">
                        <p className="text-white text-center pal">All session data is presented at the bottom of the dashboard.  It will display the Current Streak, Total Session,
                            Total Time and Average Session times.  Using CalmStats each day will track progress which can be see in the chart view.
                        </p>
                    </div>

                    <div className="image-two col-md-6 pam image-holder min-height-500 bor">
                        <p className="text-white text-center"></p>
                    </div>
                </div>

                <div className="col-md-12">
                    <h3 className="main-text text-center spaced-out text-white">
                        Demo Account
                    </h3>
                    <h6 className="main-text text-center spaced-out">
                        Use the email address demo@email.com
                    </h6>
                    <h6 className="main-text text-center spaced-out">
                        The password is 12345, just like in the movies!
                    </h6>
                    <h5 className="text-center">
                        <a className="login text-center" href="#" onClick={this.login}>
                            <i className="fa fa-sign-in"></i>
                            &nbsp;&nbsp;Login
                        </a>
                    </h5>


                </div>
            </div>
        )
    }
}