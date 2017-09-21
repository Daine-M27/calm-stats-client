
import React, { Component } from 'react';
// import './css/searchResults.css'
import {connect} from 'react-redux';
import {selectVideo} from "../actions"


class SearchResult extends Component {

    constructor(props){
        super(props);

    }


    render(){

        return (


            <div id={'resultid'} className="col-md-12 pas bbs" onClick={() => this.props.dispatch(selectVideo(this.props.id.videoId))}>
                <div className="row">
                    <div className="col-md-9">
                        <div className="col-md-12 pas font14"> {this.props.snippet.title}</div>
                        <div className="row man pan mtl">
                            <div className="col-md-12 font12 pas text-dark-gray"> {this.props.snippet.description}</div>
                        </div>
                    </div>
                    <div className="col-md-3 bls">
                        <div className="col-md-4 text-center"><img src={this.props.snippet.thumbnails.default.url} alt="video thumbnail"/></div>
                    </div>
                    
                </div>                                
                
                
            </div>

        )

    }



}

function maptStateToProps(state) {

}

export default connect(maptStateToProps)(SearchResult)