import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import YouTube from 'react-youtube';
import SearchResult from './searchResult';
import StatisticSheet from './statisticSheet';
import './css/dashboard.css';
import DailyChart from './dailyChart';
import auth0 from 'auth0-js';
import ReactModal from 'react-modal';

export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.props.auth.handleAuthentication();
        this.serverUrl = 'https://gentle-sea-29060.herokuapp.com/api/v1';
        // this.serverUrl = 'http://localhost:3001/api/v1';
        this.state = {
            showModal: false,
            graphData:{
                labels: [],
                datasets: [{
                    label: 'Minuets Per Day',
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(255,255,0,0.4)',
                    borderColor: 'rgba(255,255,0,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,255,0,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: []
                }]
            },
            inputValue: "",
            results: null,
            videoId: null,
            player: null,
            calmStatsId: "",
            currentUserStats: null,
            averageStatistics: null,
            recordStatistics: null,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.onReady = this.onReady.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);

        this.startMeditationSession = this.startMeditationSession.bind(this);
        this.stopMeditationSession = this.stopMeditationSession.bind(this);

        this.handleEnterKey = this.handleEnterKey.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleEnterKey (event){
        if(event.keyCode == 13){
            this.sendSearch();
        }
    }

    onReady(event) {
        // console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`);
        this.setState({
            player: event.target,
        });
    }

    onPlayVideo() {
        this.state.player.playVideo();
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

                //console.log(results);

            })
            .catch(function(ex) {
                console.log('parsing failed send search function', ex)
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


    //gets all data from mongodb through get request to server
    getUserInfo(){
        console.log('get user info ');
        const that = this;
        //console.log(localStorage.getItem('access_token'));
        if(localStorage.getItem('access_token')){

            fetch(this.serverUrl + '/sessions/getstats/' + localStorage.getItem('access_token'))
                .then(function (response) {
                    console.log(response, 'get user info response');
                    return response.json();
                })
                .then(function(json) {
                    console.log('parsed json', json);
                    //console.log('date and time from json', json.graphData[0].date, json.graphData[0].time);
                    const id = json.calmStatsId;
                    const labelArray = [];
                    const graphData = [];
                    //console.log(json.currentUserStats[3].dataValue);
                    // that.setState({
                    //     calmStatsId: id
                    // });
                    const statisticsLineCurrent = json.currentUserStats.map((result, index) =>
                        <StatisticSheet key={index} title={result.title} dataValue={result.dataValue} {...result}/>
                    );
                    console.log(json.graphData.length);
                    for( let i = 0; i < json.graphData.length; i++){
                        labelArray.push(json.graphData[i].date);
                        graphData.push(json.graphData[i].time)

                    }
                    console.log(labelArray, 'label Array');
                    that.setState({
                        currentUserStatistics: statisticsLineCurrent,
                        calmStatsId: id,
                        graphData:{labels: labelArray, datasets:[{
                            label: 'Minuets Per Day',
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(255,255,0,0.4)',
                            borderColor: 'rgba(255,255,0,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(255,255,0,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data:graphData

                        }]},


                    });
                    console.log(that.state, 'state log after set state in get stats')
                })
                .then(function(){
                    console.log(that.state.currentUserStats, 'user stats log')
                })
                .catch(function(ex) {
                    console.log('parsing failed', ex)
                })
        }
        else {
            console.log('no access token found')
        }

    }


//called from playbutton in youtube component
    startMeditationSession() {
        //console.log(this.state, 'start meditation session')
        const calmId = this.state.calmStatsId;
        const dateString = new Date();
        const dateMilliseconds =  dateString.getTime();

        fetch(this.serverUrl + '/sessions/start/' + dateMilliseconds+ '/' + calmId)
            .then(function (response) {
                console.log(response, 'response from set session');
                //return response.json();
            })
            // .then(function(json) {
            //     console.log('parsed json', json)
            // })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })

    }


    stopMeditationSession(){
        const calmId = this.state.calmStatsId;
        const that = this;
        const dateString = new Date();
        const dateMilliseconds =  dateString.getTime();

        fetch(this.serverUrl + '/sessions/stop/' + dateMilliseconds+ '/' + calmId)
            .then(function (response) {
                console.log(response, 'stop session response log after fetch');
                return response.json();
            })
            .then(function(json) {
                // console.log('parsed json from stop session', json.currentUserStats);
                that.getUserInfo()

            })
            .then(function(){
                that.handleCloseModal()
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })

    }

    componentDidMount(){
        this.getUserInfo();
        document.addEventListener("keydown", this.handleEnterKey, false);


    }


    render(){
        const { isAuthenticated } = this.props.auth;
        const opts = {
            height: '100%',
            width: '100%',

        };

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

        const overFlow = {
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

        const customStyles = {
            overlay: {
                backgroundColor   : 'rgba(0, 186, 242, 1)'
            },
            content : {
                top : '50%',
                left : '50%',
                right : 'auto',
                bottom : 'auto',
                marginRight : '-50%',
                transform : 'translate(-50%, -50%)',
                border : '3px solid #cfcfcf',
                padding : '20px'
            }
        };


//console.log(this.props.auth);
        return (

            //wraps entire page
            <div className="container col-md-12 col-xs-12 bg-calm">
                {
                    isAuthenticated() && (

                        <div className="col-md-12 pal">
                            {/*<button onClick={this.handleOpenModal}>Trigger Modal</button>*/}

                            <ReactModal
                                isOpen={this.state.showModal}
                                contentLabel="End Session Dialog"
                                style={customStyles}
                            >
                                <div className="text-center">
                                    <i className="modal-icon fa fa-cloud text-center"></i>
                                    <h6>Your session has ended</h6>
                                    <h6>Close for updated statistics</h6>
                                    <br/>
                                    <button onClick={this.stopMeditationSession}>Close</button>
                                </div>


                                {/*<button onClick={this.handleCloseModal}>Close Modal</button>*/}
                                {/*<br/>*/}
                                {/*<button onClick={this.onPlayVideo}>Resume Session</button>*/}
                                {/*<br/>*/}
                                {/*<button onClick={this.stopMeditationSession}>Close</button>*/}
                            </ReactModal>

                            <div className="row top-half">
                                <div className="col-md-5 col-xs-12 pal">
                                    <div className="col-md-12 pan bg-white" style={resultBoxStyle} >

                                        <div className="col-md-12 pan bbs">
                                            <div className="col-md-11 col-xs-11 pan brs" >
                                                <input type="search" placeholder="Type to search..."
                                                       className="form-control" style={searchBoxStyle}
                                                       value={this.state.inputValue}
                                                       onChange={evt => this.updateInputValue(evt)}></input>
                                            </div>

                                            <div className="col-md-1 pan text-center cursorp" >
                                                <i className="fa fa-search" style={mglassStyle} onClick={() => {
                                                    this.sendSearch()
                                                }}>
                                                </i>
                                            </div>
                                        </div>

                                        <div className="col-md-12 bg-grey-light pam bbs bts spaced-out text-calm-blue">

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
                                <div className="col-md-7 col-xs-12 pal ">
                                    <div className="col-md-12 bor pan" style={playerBoxStyle}>
                                        <YouTube videoId={this.state.videoId}
                                                 opts={opts}
                                                 onPlay={this.startMeditationSession.bind(this)}
                                                 onPause={this.handleOpenModal.bind(this)}
                                                 onReady={this.onReady}
                                                 // onEnd={this.stopMeditationSession().bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-12 bottom-half">
                                <div className="col-md-12 pal">
                                    <div className="col-md-12 pan " style={chartBoxStyle}>
                                        <DailyChart graphData={this.state.graphData}/>
                                    </div>
                                </div>
                                <div className="col-md-2 side-space">

                                </div>

                                <div className="col-md-8 col-xs-12 pal">
                                    <div className="col-md-12 pan bg-white" style={statBoxStyle}>
                                        <div className="col-md-12 pas bbs bg-grey-light text-center spaced-out">
                                            <i className="fa fa-sun-o"></i>
                                            &nbsp;Current Statistics
                                        </div>
                                        {this.state.currentUserStatistics}
                                    </div>
                                </div>

                                <div className="col-md-2 side-space">
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

