import React, { Component } from 'react';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
const data = [
    {date: 'Sep 1', time: 23},
    {date: 'Sep 2', time: 18},
    {date: 'Sep 3', time: 45},
    {date: 'Sep 4', time: 28},
    {date: 'Sep 5', time: 0},
    {date: 'Sep 6', time: 33},
    {date: 'Sep 7', time: 25},
];
export default class DailyChart extends Component{
    render () {
        return (
            <ResponsiveContainer height='100%' width='100%'>
                <LineChart data={data}
                           margin={{top: 20, right: 50, left: 0, bottom: 10}}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Legend />
                    <Line type="monotone" dataKey="time" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}