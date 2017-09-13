import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import YouTube from 'react-youtube';
import SearchResult from './searchResult'
import './css/dashboard.css'


export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.serverUrl = 'http://localhost:3001/api/v1';
        this.state = {
            inputValue: "",
            results: null,
            videoId: null,
            calmStatsId: ""
        };
        this.state.dashboardData = ''

    }

    login() {
        this.props.auth.login();
    }

//sent over to searchResult component
    loadVideo(videoId, context){
        console.log(videoId);
        context.setState({
            videoId: videoId
        });
        console.log(context.state)
    }

    //move to action for youtube search
    sendSearch() {

        // console.log(this.state);
        let resultRelay = {};
        console.log(this.serverUrl, "sendSearch() server url");
        const that = this;

        fetch(this.serverUrl + '/search/' + this.state.inputValue)
            .then(function(response){
                return response.json();

            })
            .then(function(json) {
                console.log('parsed json', json);
                // resultRelay = {json};
                // console.log(resultRelay, 'full');
                const results = json.items.map((result, index) =>
                    <SearchResult key={index} videoLoader={that.loadVideo} context={that} {...result} />
                );
                //
                that.setState({
                    results: results
                });

                console.log(results);

            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            });
        console.log('sent search to server');
    }



    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
        console.log(evt.target.value);
        console.log(this.state)

    }
//called from playbutton in youtube component
    startSession() {

        const dateString = new Date();
        const dateMilliseconds =  dateString.getTime();
        //console.log(this.props, "all props");
        fetch('http://localhost:3001/api/v1' + '/sessions/start/' + dateMilliseconds)
            .then(function(response){
                console.log(response)
            })

    }

    componentDidMount(){
        this.props.auth.handleAuthentication();
    }


    render(){
        const { isAuthenticated } = this.props.auth;
        //window.login = this.props.auth;
        //console.log(this.props.auth.handleAuthentication());

        setTimeout(function(){
            const windowHeight = window.innerHeight;
            const navHeight = document.querySelector(".navbar-header").offsetHeight;
            const leftOverHeight = windowHeight - navHeight;
            console.log(leftOverHeight);

        }, 1000);



        const resultBoxStyle =  {
            height: 598 + 'px',
            overflowY: 'auto'
        };

        const playerBoxStyle =  {
            height: 598 + 'px'
        };

        const statBoxStyle =  {
            height: 300 + 'px'
        };

        const chartBoxStyle =  {
            height: 300 + 'px'
        };

        const searchBoxStyle = {
            border: "0px"
        };

        const mglassStyle = {
            verticalAlign: "-webkit-baseline-middle"
        };

        const fixedPosition = {
           // position: 'fixed'
        };





        return (
            //wraps entire page
            <div className="col-md-12">
                {
                    isAuthenticated() && (
                        <div className="col-md-12 pal">
                            <div className="col-md-12 top-half">
                                <div className="col-md-5 pal">
                                    <div className="col-md-12 bor pan" style={resultBoxStyle}>

                                        <div className="col-md-12 pan bbs">
                                            <div className="col-md-11 pan brs" style={fixedPosition}>
                                                <input type="search" placeholder="Type to search..."
                                                       className="form-control" style={searchBoxStyle}
                                                       value={this.state.inputValue}
                                                       onChange={evt => this.updateInputValue(evt)}></input>
                                            </div>

                                            <div className="col-md-1 pan text-center cursorp" style={fixedPosition}>
                                                <i className="fa fa-search" style={mglassStyle} onClick={() => {
                                                    this.sendSearch()
                                                }}></i>
                                            </div>
                                        </div>

                                        <div className="col-md-12 bg-grey-light pam bbs spaced-out text-calm-blue" style={fixedPosition}>

                                            <div className="col-md-8 brs">Video Title</div>
                                            <div className="col-md-4 text-center">
                                                <i className="fa fa-film"></i>
                                                &nbsp;Preview
                                            </div>
                                        </div>

                                        <div className="searchResults">
                                            {this.state.results}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 pal ">
                                    <div className="col-md-12 bor pan" style={playerBoxStyle}>
                                        <YouTube videoId={this.state.videoId}
                                                onPlay={this.startSession}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 bottom-half">
                                <div className="col-md-3 pal">
                                    <div className="col-md-12 bor pan" style={statBoxStyle}>
                                        <div className="col-md-12 pas bbs bg-grey-light text-center spaced-out">
                                            <i className="fa fa-sun-o"></i>
                                            &nbsp;Daily
                                        </div>
                                        <div className="col-md-12 pal text-center spaced-out">
                                            <div className="col-md-6 pal text-center spaced-out font14">
                                                Number of Days
                                            </div>
                                            <div className="col-md-6 pal text-center spaced-out text-dark-gray">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pal">
                                    <div className="col-md-12 bor pan" style={statBoxStyle}>
                                        <div className="col-md-12 pas bbs bg-grey-light text-center spaced-out">
                                            <i className="fa fa-sun-o"></i>
                                            &nbsp;Weekly
                                        </div>

                                        <div className="col-md-12 pal text-center spaced-out">
                                            <div className="col-md-6 pal text-center spaced-out font14">
                                                Number of Days
                                            </div>

                                            <div className="col-md-6 pal text-center spaced-out text-dark-gray">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pal">

                                    <div className="col-md-12 bor pan" style={statBoxStyle}>
                                        <div className="col-md-12 pas bbs bg-grey-light text-center spaced-out">
                                            <i className="fa fa-sun-o"></i>
                                            &nbsp;Monthly
                                        </div>
                                        <div className="col-md-12 pal text-center spaced-out">


                                            <div className="col-md-6 pal text-center spaced-out font14">
                                                Number of Days
                                            </div>

                                            <div className="col-md-6 pal text-center spaced-out text-dark-gray">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 pal">

                                    <div className="col-md-12 bor pan" style={statBoxStyle}>
                                        <div className="col-md-12 pas bbs bg-grey-light text-center spaced-out">
                                            <i className="fa fa-sun-o"></i>
                                            &nbsp;Yearly
                                        </div>
                                        <div className="col-md-12 pal text-center spaced-out">
                                            <div className="col-md-6 pal text-center spaced-out font14">
                                                Number of Days
                                            </div>
                                            <div className="col-md-6 pal text-center spaced-out text-dark-gray">
                                                5
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 pal">
                                    <div className="col-md-12 bor pan" style={chartBoxStyle}>
                                        charts!
                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <a
                                style={{cursor: 'pointer'}}
                                onClick={this.login.bind(this)}
                            >
                                Log In
                            </a>
                            {' '}to continue.
                        </h4>
                    )
                }
            </div>
        )
    }
}

