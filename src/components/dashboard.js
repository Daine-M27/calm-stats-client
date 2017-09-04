import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'

import './css/dashboard.css'

export default class Dashboard extends Component{


    render(){
        return (
            <section className="dashboard-upper">
                <div className="results-sidebar">

                </div>
                <div className="search-box">

                    <form action="#" className="search-form">
                        <label htmlFor="query">Enter search term</label>
                        <input type="text" className="search-input" placeholder="Guided Meditations"/>
                        <button type="submit">Search</button>
                    </form>

                    <div className="player section">
                    </div>

                </div>
            </section>
        )
    }
}