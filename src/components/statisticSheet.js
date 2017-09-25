import React, { Component } from 'react';
// import './css/statisticSheet.css'
import {connect} from 'react-redux';

class StatisticSheet extends Component {

    constructor(props){
        super(props);

    }

    render(){

        return (
            <div className="col-md-12 pas text-center spaced-out">
                <div className="col-md-9 pas text-left spaced-out font12">
                    {this.props.title}
                </div>
                <div className="col-md-3 pas text-right spaced-out font12 text-dark-gray">
                    {this.props.dataValue}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    
}


export default connect(mapStateToProps)(StatisticSheet);