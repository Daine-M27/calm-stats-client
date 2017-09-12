
import React, { Component } from 'react';
// import './css/searchResults.css'

export default class searchResult extends Component {

    constructor(props){
        super(props);

    }


    render(){

        return (


            <div id={'resultid'} className="col-md-12 pas bbs" onClick={() => this.props.videoLoader(this.props.id.videoId, this.props.context)}>
                <div className="col-md-8 brs"> {this.props.snippet.title}</div>
                <div className="col-md-4 text-center"><img src={this.props.snippet.thumbnails.default.url} alt="video thumbnail"/></div>
            </div>

        )

    }



}