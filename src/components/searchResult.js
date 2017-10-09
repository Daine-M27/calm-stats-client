
import React, { Component } from 'react';
// import './css/searchResults.css'

export default class SearchResult extends Component {

    constructor(props){
        super(props);

    }


    render(){

        return (


            <div id={'resultid'} className="container col-md-12 pas bbs" onClick={() => this.props.videoLoader(this.props.id.videoId, this.props.context)}>

                <div className="row">
                    <div className="col-md-8">
                        <div className="col-md-12 pas font14"> {this.props.snippet.title}</div>
                        <div className="row man pan mtl">
                            <div className="col-md-12 font12 pas text-dark-gray"> {this.props.snippet.description}</div>
                        </div>
                    </div>
                    <div className="col-md-4 bls">
                        <div className="text-center"><img src={this.props.snippet.thumbnails.default.url} width="100%" alt="video thumbnail"/></div>
                    </div>

                </div>
                
                
            </div>

        )

    }



}