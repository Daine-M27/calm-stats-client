import React from 'react';

import './css/homepage.css';

export default function Home(props) {
    return (
        <div className="home-page ">            
            <section className="col-md-12 upper-section man pan">
                <div className="col-md-12 man pan ">
                    <h1 className="element-animation-text title-call font-allura mtl ptl text-white ">Meditation can improve your life!</h1>
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
                <div className="info-columns col-md-2 hidden-xs"></div>
                <div className="info-columns col-md-8">
                    <div className=" font-raleway col-md-12 text-center text-dark-gray w200">
                        <h4>Studies Supporting the Benefits of Meditation</h4>
                    </div>
                    <div className="pas col-lg-4 text-center col-md-4 col-sm-12">
                        <div className="bor-section pbl">
                            <h4 className="font-raleway text-light-blue pbm bbs"><span className="fa fa-university"> </span> Intellectual</h4>
                            <li> <a rel="noopener noreferrer" target="_blank" href="http://www.psyn-journal.com/article/S0925-4927%2810%2900288-X/abstract">Increases Gray Matter</a> </li>
                            <li> <a rel="noopener noreferrer" target="_blank" href="http://online.liebertpub.com/doi/abs/10.1089/acm.2006.12.817">Improves Focus and Attention</a> </li>
                            <li> <a rel="noopener noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2944261/">Improves Learning and Memory</a> </li>
                        </div>
                    </div>
                    <div className="pas col-lg-4 text-center col-md-4 col-sm-12">
                        <div className="bor-section pbl">
                            <h4 className="font-raleway text-light-blue pbm bbs"><span className="fa fa-heartbeat"> </span> Physiological</h4>
                            <li> <a rel="noopener noreferrer" target="_blank" href="http://www.huffingtonpost.com/2013/04/30/meditation-health-benefits_n_3178731.html?utm_hp_ref=mostpopular">Relieves pain</a> </li>
                            <li> <a rel="noopener noreferrer" target="_blank" href="http://circoutcomes.ahajournals.org/content/5/6/750">Reduces risk of Heart Disease</a> </li>
                            <li> <a rel="noopener noreferrer" target="_blank" href="http://online.liebertpub.com/doi/abs/10.1089/acm.2008.0416">Lowers Blood Pressure</a> </li>
                        </div>
                    </div>
                    <div className="pas col-lg-4 text-center col-md-4 col-sm-12">
                        <div className="bor-section pbl">
                            <h4 className="font-raleway text-light-blue pbm bbs"><span className="fa fa-smile-o"> </span> Psychological</h4>
                            <li> <a rel="noopener noreferrer" target="_blank" href="https://www.sciencedaily.com/releases/2013/03/130315095916.htm">Decreases Depression</a> </li>
                            <li> <a rel="noopener noreferrer" target="_blank" href="http://online.liebertpub.com/doi/abs/10.1089/acm.2006.12.817">Decreases Anxiety Disorders</a> </li>
                            <li> <a rel="noopener noreferrer" target="_blank" href="https://link.springer.com/article/10.1007%2Fs10943-013-9679-0">Improves Mood and Well-Being</a> </li>
                        </div>
                    </div>
                </div>
                <div className="info-columns col-md-2 hidden-xs"></div>
            </section>


            <section className="">
                <div className="col-md-12 mtl bg-dark4">
                    <div className="col-md-12">
                        <div className="col-md-4 text-right ptl ">
                            <svg height="80" width="300">
                                <g fill="none" stroke="#00baf2" strokeWidth="3">
                                    <path strokeLinecap="round" d="M110 18 l180 0" />
                                    <path strokeLinecap="round" d="M5 30 l270 0" />
                                    <path strokeLinecap="round" d="M110 42 l180 0" />
                                </g>
                            </svg>
                        </div>
                        <div className="font-allura col-md-4 text-center text-light-blue pts">
                            <h3>Welcome to Calm Stats</h3>
                        </div>
                        <div className="col-md-4 text-left ptl ">
                            <svg height="80" width="300">
                                <g fill="none" stroke="#00baf2" strokeWidth="3">
                                    <path strokeLinecap="round" d="M15 18 l180 0" />
                                    <path strokeLinecap="round" d="M30 30 l270 0" />
                                    <path strokeLinecap="round" d="M15 42 l180 0" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-xs-12 bg-dark4 pbl">
                    <div className="col-md-2"></div>
                    <div className="font-raleway text-dark-gray bg-white col-md-8 col-xs-12 text-holder pbl">
                        <div className="ptl">
                            <h6 className="text-calm-blue">What's this all about?</h6>
                            <p className="small font-raleway">
                                Calm Stats was created to provide education on how meditation can change your life, and allow you to track meditation
                                habits to learn what works best for you.  The simple user interface was developed to be minimalistic and unobtrusive
                                so you can focus on what you came for.
                            </p>
                            <p className="small font-raleway">
                                Once you sign up, You are taken to the dashboard where you can use the search function to find your
                                favorite meditation soundtrack.  After that, select the search result you would like to use and press play.
                                The timer will start when you press play and stop when you press pause.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <br/>
                </div>
                <div className="col-md-12 bg-dark4 pbl">
                    <div className="col-md-2"></div>
                    <div className="font-raleway text-dark-gray bg-white pbm col-md-8 col-xs-12">
                        <img src={require("../images/homepage.png")} alt="Interface" width={"100%"} height={"auto"}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </section>
        </div>
    )
}
