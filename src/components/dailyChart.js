import React, { Component } from 'react';
import {connect} from 'react-redux'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, CartesianAxis, Tooltip, Legend} from 'recharts';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
const data = [
    {date: 'Sep 1', time: 23},
    {date: 'Sep 2', time: 18},
    {date: 'Sep 3', time: 45},
    {date: 'Sep 4', time: 28},
    {date: 'Sep 5', time: 0},
    {date: 'Sep 6', time: 33},
    {date: 'Sep 7', time: 25},
    {date: 'Sep 8', time: 23},
    {date: 'Sep 9', time: 18},
    {date: 'Sep 10', time: 45},
    {date: 'Sep 11', time: 28},
    {date: 'Sep 12', time: 0},
    {date: 'Sep 13', time: 33},
    {date: 'Sep 14', time: 25}
];

class DailyChart extends Component{
    render () {
        return (
            <ResponsiveContainer height='100%' width='100%'>
                <LineChart data={data}
                           margin={{top: 20, right: 50, left: 0, bottom: 10}}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <CartesianGrid stroke="yellow" strokeDasharray="3 3" />
                    <CartesianAxis stroke="yellow" />
                    {/*<Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />*/}
                    <Line type="monotone" dataKey="time" stroke="yellow" fill="#e9e3a7"/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(DailyChart)
