import React from 'react';

import './css/homepage.css';

export default function Home(props) {
    return (
        <div className="home-page ">            
            <section className="col-md-12 upper-section man pan">
                <div className="col-md-12 man pan ">
                    <h1 className="element-animation title-call font-allura mtl ptl text-white mtsl ">Meditation can improve your life!</h1>
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className="col-md-5 text-right">
                        <svg height="100" width="300">
                            <g fill="none" stroke="white" strokeWidth="3">
                                <path strokeLinecap="round" d="M110 48 l180 0" />
                                <path strokeLinecap="round" d="M5 60 l270 0" />
                                <path strokeLinecap="round" d="M110 72 l180 0" />
                            </g>
                        </svg>
                    </div>
                    <div className="col-md-2 text-center">
                        <i className="title-icon element-animation fa fa-cloud text-center"></i>
                    </div>
                    <div className="col-md-5 text-left">
                        <svg height="100" width="300">
                            <g fill="none" stroke="white" strokeWidth="3">
                                <path strokeLinecap="round" d="M15 48 l180 0" />
                                <path strokeLinecap="round" d="M30 60 l270 0" />
                                <path strokeLinecap="round" d="M15 72 l180 0" />
                            </g>
                        </svg>
                    </div>
                </div>

            </section>

            <section className="col-md-12">
                <div className="info-columns">
                    <div className="col-md-12 text-center text-dark-blue">
                        <h3>Studies Supporting the Benefits of Meditation</h3>
                    </div>
                    <div className="col-lg-4 text-center  col-md-4 col-sm -12 left-info text-dark-blue">
                        <h4>Intellectual</h4>
                        <li> <a href="http://www.psyn-journal.com/article/S0925-4927%2810%2900288-X/abstract"><i>Increases Gray Matter</i></a> </li>
                        <li> <a href="http://online.liebertpub.com/doi/abs/10.1089/acm.2006.12.817"><i>Improves Focus and Attention</i></a> </li>
                        <li> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2944261/"><i>Improves Learning and Memory</i></a> </li>
                    </div>
                    <div className="col-lg-4 text-center  col-md-4 col-sm -12 left-info text-dark-blue">
                        <h4>Physiological</h4>
                        <li className="yellow-text"> <a href="http://www.huffingtonpost.com/2013/04/30/meditation-health-benefits_n_3178731.html?utm_hp_ref=mostpopular"><i>Relieves pain</i></a> </li>
                        <li className="yellow-text"> <a href="http://circoutcomes.ahajournals.org/content/5/6/750"><i>Reduces risk of Heart Disease</i></a> </li>
                        <li className="yellow-text"> <a href="http://online.liebertpub.com/doi/abs/10.1089/acm.2008.0416"><i>Lowers Blood Pressure</i></a> </li>
                    </div>
                    <div className="col-lg-4 text-center  col-md-4 col-sm -12 left-info text-dark-blue">
                        <h4>Psychological</h4>
                        <li className="yellow-text"> <a href="https://www.sciencedaily.com/releases/2013/03/130315095916.htm"><i>Decreases Depression</i></a> </li>
                        <li className="yellow-text"> <a href="http://online.liebertpub.com/doi/abs/10.1089/acm.2006.12.817"><i>Decreases Anxiety Disorders</i></a> </li>
                        <li className="yellow-text"> <a href="https://link.springer.com/article/10.1007%2Fs10943-013-9679-0"><i>Improves Mood and Well-Being</i></a> </li>
                    </div>
                </div>
            </section>

            <section>
                <div className="col-md-12 pal">
                    <h4> How it Works</h4>

                    <div className="image-one col-md-6 pam image-holder min-height-400 bor">
                        <p className="text-light-blue text-center"></p>
                    </div>
                    <div className=" col-md-6 pam text-holder pal">
                        <p className="text-light-blue text-center pal">Once you sign up, use the search function to find your favorite type of meditation music.  After that,
                        all you need to do is select the video and press play.  The site will start your timer when you press play and stop it when you press pause.</p>
                    </div>
                </div>
                <div className="col-md-12 pal">
                    <div className="col-md-6 pam text-holder pal">
                        <p className="text-light-blue text-center pal">All session data is presented at the bottom of the dashboard.  It will display your Current Streak, Total Session,
                            Total Time and Average Session times.  Use CalmStats each day to track your progress and see your daily times display in the chart.
                        </p>
                    </div>

                    <div className="image-two col-md-6 pam image-holder min-height-400 bor">
                        <p className="text-light-blue text-center"></p>
                    </div>
                </div>
            </section>
        </div>
    )
}
