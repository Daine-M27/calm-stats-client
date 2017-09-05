import React from 'react';

import './css/homepage.css';

export default function Home(props) {
    return (
        <div className="home-page">
            <section className="col-md-12 upper-section bor">
                <div className="col-md-12 bor">
                    <h1 className="text-calm-blue text-vert-middle">Use daily meditation to improve your life!</h1>
                </div>
                <div>
                    <button className="">Create account</button>
                </div>

            </section>
            <section className="col-md-12">
                <div className="col-md-12">
                    <h2 className="text-calm-blue">Proven Benefits of Meditation</h2>
                </div>

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
