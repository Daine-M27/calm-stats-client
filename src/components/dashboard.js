import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import YouTube from 'react-youtube';
import SearchResult from './searchResult'
import './css/dashboard.css'

export default class Dashboard extends Component{
    constructor(props){
        super(props)

        this.serverUrl = 'http://localhost:3001/api/v1/search';
        this.state = {
            inputValue: "",
            results: null,
            videoId: null
        }

    }

//sent over to searchResult component
    loadVideo(videoId, context){
        console.log(videoId)
        context.setState({
            videoId: videoId
        });
        console.log(context.state)
    }

    //move to action for youtube search
    sendSearch() {

        // console.log(this.state);
        let resultRelay = {};
        console.log(resultRelay, "empty");
        const that = this;

        fetch(this.serverUrl + '/' + this.state.inputValue)
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
            .then(
                console.log(that.state.searchResults, 'fullstate')
            )
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

    render(){

        // const resultBoxStyle = {};
        // const playerBoxStyle = {};

        setTimeout(function(){
            const windowHeight = window.innerHeight;
            const navHeight = document.querySelector(".navbar-header").offsetHeight;
            const leftOverHeight = windowHeight - navHeight;
            console.log(leftOverHeight);

        }, 1000);



        const resultBoxStyle =  {
            height: 598 + 'px'
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









        // const hrStyle = {
        //     border
        // }

        return (
            //wraps entire page
            <div className="col-md-12 pal">


                {/*wraps elements to display on top of page*/}
                <div className="col-md-12 top-half">
                    {/*search bar and results*/}
                    <div className="col-md-4 pal">

                        <div className="col-md-12 bor pan" style={resultBoxStyle}>

                            <div className="col-md-12 pan bbs">
                                <div className="col-md-11 pan brs">
                                    <input type="search" placeholder="Type to search..." className="form-control" style={searchBoxStyle} value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}></input>
                                </div>

                                <div className="col-md-1 pan text-center cursorp">
                                    <i className="fa fa-search" style={mglassStyle} onClick={() => {this.sendSearch()}}></i>
                                </div>

                            </div>

                            <div className="col-md-12 bg-grey-light pam bbs spaced-out text-calm-blue">

                                <div className="col-md-8 brs">  The Name</div>
                                <div className="col-md-4 text-center">
                                    <i className="fa fa-clock-o"></i>
                                    &nbsp;Length
                                </div>
                            </div>

                            <div className="searchResults">
                                {this.state.results}
                            </div>

                            {/*<div className="col-md-12 pas bbs">*/}
                                {/*<div className="col-md-8 brs"> Video title</div>*/}
                                {/*<div className="col-md-4 text-center">  04:16</div>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-12 pas bbs">*/}
                                {/*<div className="col-md-8 brs"> Video title</div>*/}
                                {/*<div className="col-md-4 text-center">  04:16</div>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-12 pas bbs">*/}
                                {/*<div className="col-md-8 brs"> Video title</div>*/}
                                {/*<div className="col-md-4 text-center">  04:16</div>*/}
                            {/*</div>*/}
                            {/*<div className="col-md-12 pas bbs">*/}
                                {/*<div className="col-md-8 brs"> Video title</div>*/}
                                {/*<div className="col-md-4 text-center">  04:16</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {/* video player window*/}
                    <div className="col-md-8 pal ">

                        <div className="col-md-12 bor pan" style={playerBoxStyle}>

                            <YouTube videoId={this.state.videoId}/>


                        </div>

                    </div>

                </div>

                {/*wraps content for bottom of page*/}
                <div className="col-md-12 bottom-half">
                    {/*columns for data read out*/}
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



                    {/*container for chart display*/}
                    <div className="col-md-12 pal">

                        <div className="col-md-12 bor pan" style={chartBoxStyle}>
                            charts!
                        </div>

                    </div>


                </div>



            </div>


        )
    }
}

// const mapStateToProps = state => ({
//     inputValue: state.
// })