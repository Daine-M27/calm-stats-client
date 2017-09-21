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
                    <div className="col-md-6 pam image-holder min-height-500 bor">
                        <p className="text-white text-center">image here akjshd</p>
                    </div>
                    <div className="col-md-6 pam text-holder pal">
                        <p className="text-white text-center pal">Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        </p>
                    </div>
                </div>
                <div className="col-md-12 pal">                
                <div className="col-md-6 pam text-holder pal">
                        <p className="text-white text-center pal">Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        Hurricane Maria was battering the Dominican Republic on Thursday as the long-term devastation in Puerto Rico was just coming into focus.
                        </p>
                    </div>
                    
                    <div className="col-md-6 pam image-holder min-height-500 bor">
                        <p className="text-white text-center">image here akjshd</p>
                    </div>
                    

                </div>
                <div className="col-md-12">                
                </div>
            </div>
        )
    }
}