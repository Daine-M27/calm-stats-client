import React from 'react';

import './css/homepage.css';

export default function Home(props) {
    return (
        <div className="home-page">
            <section className="upper-section">
                <h1 className="main-title">Use daily meditation to improve your life!</h1>
                <button className="signup-button">Create account</button>
            </section>
            <section>
                <h2>Proven Benefits of Meditation</h2>
                <div className="info-columns">
                    <div className="col-lg-4 col-md-4 col-sm -12 left-info">
                        <p>place holder</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm -12 middle-info">
                        <p>place holder</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm -12 right-info">
                        <p>place holder</p>
                    </div>
                </div>
            </section>
            <section className="fixed-bg">
                {/*put image here*/}
            </section>
            <section className="description-section">
                <h2>How it works</h2>
                <div className="description-columns">
                    <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                        <p>placeholder</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                        <p>placeholder</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
